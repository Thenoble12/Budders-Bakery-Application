import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";

function Login({ activeAccount }) {
  const [activeAccounts, setActiveAccounts] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = activeAccounts.find(
      (account) =>
        account.username === username && account.password === password
    );

    if (user) {
      activeAccount(user);
      navigate("/home");
    } else {
      alert("Username or Password is Incorrect!!!");
    }
  };

  function handleErrors(response) {
    if (!response.ok) throw new Error(response.status);
    return response;
  }

  useEffect(() => {
    fetch(`http://localhost:3000/users/`)
      .then(handleErrors)
      .then((resp) => resp.json())
      .then((data) => setActiveAccounts([...data]));
  }, []);

  return (
    // <div>
    //     <h2>Login</h2>
    //     <form onSubmit={(e)=>{handleSubmit(e)}}>
    //         <div className="input-container">
    //             <label>Username </label>
    //             <input onChange={(e)=>setUsername(e.target.value)} type="text" name="username" required />
    //         </div>
    //         <div className="input-container">
    //             <label>Password </label>
    //             <input onChange={(e)=>setPassword(e.target.value)}type="password" name="password" required />
    //         </div>
    //         <div className="button-container">
    //             <button type="submit" className="btn">Login</button>
    //         </div>
    //         <div className="link-container">
    //             <Link to="/register">Need an Account?</Link>
    //         </div>
    //     </form>
    // </div>

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
          />
          <TextField
            name="password"
            type="password"
            placeholder="password"
            label="Password"
          />
          <Button sx={{ mt: 1 /* margin top */ }}>Log in</Button>
          <Typography
            endDecorator={<Link href="/sign-up">Sign up</Link>}
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
