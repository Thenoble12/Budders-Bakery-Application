import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sheet from "@mui/joy/Sheet";
import TextField from "@mui/material/TextField";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import './Register.css'
import HandleError from "../../HandleError";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';


function Register() {
  const navigate = useNavigate();  

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [confirmed, setConfirmed] = useState();
  const [userId, setUserId] = useState();
  const [valid, setValid] = useState(true);
  const [passMatch, setPassMatch] = useState(false);
  const [confirmationState, setConfirmationState] = useState("");

  const passwordReqError =
    "Password must: be at least 8 charaters long, include at least 1 upper, 1 lower case, 1 number and 1 specal charater";
  const confirmedReqError = "Password must match!";

  let errorPassword = !valid ? true : false;
  let passwordHelperText = !valid ? passwordReqError : null;
  let idPassword = !valid
    ? "standard-error-helper-text"
    : "standard-password-input";

  let errorConfirmed = !passMatch ? true : false;
  let confirmedHelperText = !passMatch ? confirmedReqError : null;
  let idConfirmed = !passMatch
    ? "standard-error-helper-text"
    : "standard-password-input";

  let disable = !(password && confirmed && valid && password === confirmed);

  const handleConfirmation = (e) => {
    setConfirmed(e);

    console.log(password + " = " + confirmed);
  };

  useEffect(() => {
    if (password && confirmed) {
      if (password !== confirmed) {
        setConfirmationState("❌");
      }
      if (password === confirmed) {
        setPassMatch(true);
        setConfirmationState("✔️");
      }
    }
  }, [confirmed]);

  const blurHandler = (e) => {
    console.log("Hello World!");
    console.log(e.target);
    handleValidation();
  };

  const handleValidation = (e) => {
    console.log("PASSWORD: " + password);
    const requirements = new RegExp("^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$");
    const result = requirements.test(password);
    setValid(result);
  };

  useEffect(() => {
    fetch(`/users`)
      .then((resp) => resp.json())
      .then((data) => setUserId(data.length));
  }, []);

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setUserName("");
    setPassword("");
    setConfirmed("");
  };

  //   const handleErrors = (error) => {
  //    return (
  //       <div>
  //       <Stack sx={{ width: '100%' }} spacing={2}>
  //           <Alert severity="error">
  //               <AlertTitle>Error</AlertTitle>
  //               This is an error alert — <strong>{error}</strong>
  //           </Alert>
  //       </Stack>
  //     </div>
  //    )
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(valid);

    if (valid) {
      const userInfo = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        username: username,
        password: password,
        password_confirmation: confirmed,
      };
      fetch(`/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      })
        .then((r) => r.json())
        .then((data) => {
          alert("Account has been sucessfully created!!!");
          resetForm();
          navigate("/login");
        })
        .catch((error) => {
          console.error(error)
    });
    }
  };

  return (
    <main className="form">
        <Sheet
            component="form"
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
          <h2>Register</h2>
          {/* <Box
            component="form"
            sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
            noValidate
            autoComplete="off"
          > */}
            <div>
              <Typography level="h4" component="h1">
                <b>Welcome!</b>
              </Typography>
              <Typography level="body2">Create a account.</Typography>
            </div>
            <TextField
              required
              id="standard-required"
              label="First Name"
              defaultValue={firstName}
              variant="standard"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              required
              id="standard-required"
              label="Last Name"
              defaultValue={lastName}
              variant="standard"
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              required
              id="standard-required"
              label="Email"
              defaultValue={email}
              variant="standard"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              required
              id="standard-required"
              label="Username"
              defaultValue={username}
              variant="standard"
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              required
              error={errorPassword}
              helperText={passwordHelperText}
              id={idPassword}
              label="Password"
              type="password"
              defaultValue={password}
              variant="standard"
              onChange={(e) => setPassword(e.target.value)}
              onBlur={(e) => blurHandler(e)}
            />
            <span>{confirmationState}</span>
            <TextField
              required
              error={errorConfirmed}
              helperText={confirmedHelperText}
              id={idConfirmed}
              label="Confirm Password"
              type="password"
              defaultValue={confirmed}
              variant="standard"
              onChange={(e) => handleConfirmation(e.target.value)}
              onBlur={(e) => blurHandler(e)}
            />
            <span>{confirmationState}</span>
            <Button
              type="submit"
              disabled={disable}
              variant="solid"
              size="md"
              color="primary"
              onClick={(e) => handleSubmit(e)}
              sx={{ mt: 1 /* margin top */, color: '#1976d2'}}
            >
              Submit
            </Button>
            <Typography
              endDecorator={<Link href="/login">Log in</Link>}
              fontSize="sm"
              sx={{ alignSelf: "center" }}
            >
              Already have an account?
            </Typography>
          {/* </Box> */}
        </Sheet>
      </main>
  );
}

export default Register;
