import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sheet from "@mui/joy/Sheet";
import TextField from "@mui/material/TextField";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import './Account.css'
import HandleError from "../../HandleError";


function Account({ userAccount, onLogout }) {
  const navigate = useNavigate();  

  const [firstName, setFirstName] = useState(userAccount.first_name);
  const [lastName, setLastName] = useState(userAccount.last_name);
  const [email, setEmail] = useState(userAccount.email);
  const [username, setUserName] = useState(userAccount.username);
  const [password, setPassword] = useState("");
  const [confirmed, setConfirmed] = useState("");
  const [userId, setUserId] = useState(userAccount.id);
  const [valid, setValid] = useState(true);
  const [passMatch, setPassMatch] = useState(false);
  const [confirmationState, setConfirmationState] = useState("");

  const [edit, setEdit] = useState(false)
  const [deleteBool, setDeleteBool] = useState(false)
  const classArr = ["outlined-disabled", "outlined-required"]

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

  let formClassIndex = edit? 1 : 0 
  let formClass = classArr[formClassIndex]


  let disable = !(password && confirmed && valid && password === confirmed);

  const handleToggleEdit = (e) => {
    e.preventDefault()
     setEdit(!edit) 
  }  
  
  const handleToggleDelete = (e) => {
    e.preventDefault()
     setDeleteBool(!deleteBool) 
  }  

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

//   useEffect(() => {
//     fetch(`/users`)
//       .then((resp) => resp.json())
//       .then((data) => setUserId(data.length));
//   }, []);

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setUserName("");
    setPassword("");
    setConfirmed("");
  };

  const handleDelete = (e) => {
    e.preventDefault();
    
    fetch(`/users/${userAccount.id}`, {
        method: "DELETE",        
      })
        .then((r) => {
         if (r.ok) {
            alert("Account Infromation has been sucessfully updated!");
            handleLogout();
            resetForm();
            navigate("/");
         }                
      })
      .catch((error) => {
            <HandleError error={error}/>
      });
  }

//   const handleErrors = (error) => {
//      return (
//         <div>
//         <Stack sx={{ width: '100%' }} spacing={2}>
//             <Alert severity="error">
//                 <AlertTitle>Error</AlertTitle>
//                 This is an error alert — <strong>{error}</strong>
//             </Alert>
//         </Stack>
//       </div>
//      )
//   }


  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout(null));
  }   

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
      fetch(`/users/${userAccount.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      })
        .then((r) => r.json())
        .then((data) => {
          alert("Account Infromation has been sucessfully updated!");
          resetForm();
          navigate("/");          
        });
    }
  };

  return (
    <main className="form">
        {console.log("HERE!!!!: " + formClass)}
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
          <h2>Account Information</h2>
          {/* <Box
            component="form"
            sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
            noValidate
            autoComplete="off"
          > */}
            <div>                
              <Typography level="h4" component="h1">
                <b>Edit Account</b>
              </Typography>
            </div>
            <TextField
              disabled={!edit}
              required={edit}
              id={formClass}
              label="First Name"
              defaultValue={firstName}
              variant="standard"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              disabled={!edit}
              required={edit}
              id={formClass}
              label="Last Name"
              defaultValue={lastName}
              variant="standard"
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              disabled={!edit}
              required={edit}
              id={formClass}
              label="Email"
              defaultValue={email}
              variant="standard"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              disabled={!edit}
              required={edit}
              id={formClass}
              label="Username"
              defaultValue={username}
              variant="standard"
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              disabled={!edit}
              required={edit}
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
              disabled={!edit}
              required={edit}
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
            <span>
            <Button
              type="submit"
              disabled={disable && edit}
              variant="solid"
              size="md"
              color="primary"
              onClick={
                edit ? (e) => handleSubmit(e) : (e) => {handleToggleEdit(e)}
              }
              sx={{ mt: 1 /* margin top */, color: '#1976d2'}}
            >
              {edit ? "Save" : "Edit"}
            </Button>
            { edit ? (
                <Button
                  type="submit"                 
                  variant="solid"
                  size="md"
                  color="danger"
                  onClick={(e) => {handleToggleEdit(e)}}
                  sx={{ mt: 1 /* margin top */, color: '#1976d2'}}   
                 >
                  Cancel
                </Button>
                )
                :
                (null)}            
            </span>
            <div>            
              <Typography level="h4" component="h1">
                <b>Delete Account</b>
              </Typography>
            </div>
            <span>  
            <Button
              type="submit"
              disabled={edit}
              variant="solid"
              size="md"
              color="danger"
              onClick={(e) => {handleToggleDelete(e)}}
              sx={{ mt: 1 /* margin top */, color: '#1976d2'}}
            >
             {deleteBool ?  "Cancel" : "Delete"}
            </Button>           
            { deleteBool ? (
                <Button
                  type="submit"                 
                  variant="solid"
                  size="md"
                  color="danger"
                  onClick={(e) => {handleDelete(e)}}
                  sx={{ mt: 1 /* margin top */, color: '#FF0000'}}   
                 >
                  Yes, Delete my Account!
                </Button>
                )
                :
                (null)}
            </span>
        </Sheet>
      </main>
  );
}

export default Account;


