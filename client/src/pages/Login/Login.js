import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import { useDispatch } from "react-redux";
import { login } from "../../redux/userSlice";

function Login({activeAccount, setActiveAccount}) {  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//     fetch(`/sessions`);
//   };

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(
      login({      
        username: username,
        password: password,
      })
    );

    fetch("/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => setActiveAccount([...data]));
  }


  return (
    <CssVarsProvider>
      <main>
        <Sheet
          sx={{
            width: 300,
            mx: "auto", // margin left & right
            my: 4, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",
            boxShadow: "md",
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body2">Sign in to continue.</Typography>
          </div>
          <TextField
            // html input attribute
            name="email"
            type="email"
            placeholder="johndoe@email.com"
            // pass down to FormLabel as children
            label="Email"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            name="password"
            type="password"
            placeholder="password"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            onClick={(e) => handleSubmit(e)}
            sx={{ mt: 1 /* margin top */ }}
          >
            Log in
          </Button>
          <Typography
            endDecorator={<Link href="/signup">Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: "center" }}
          >
            Don&apos;t have an account?
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}

export default Login;
