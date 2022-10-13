import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/joy/Stack';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/joy/Button';
import { faClose } from "@fortawesome/free-solid-svg-icons";
//import { Link } from "react-router-dom";
//import "./register.css"

function Register() {

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [username, setUserName ] = useState();
    const [password, setPassword] = useState();
    const [confirmed, setConfirmed] = useState();
    const [userId, setUserId] = useState();
    const [valid, setValid] = useState(true)
    const [passMatch, setPassMatch] = useState(false)
    

    const passwordReqError = "Password must: be at least 8 charaters long, include at least 1 upper, 1 lower case, 1 number and 1 specal charater"

    let error = !valid ? true : false
    let helperText = !valid ? passwordReqError : null
    let id = !valid ? "standard-error-helper-text" : "standard-password-input" 

    let disable = !(password && confirmed && password === confirmed)

    const handleConfirmation1 = () => {
        if (password && confirmed) {
            if (password === confirmed) {
              setPassMatch(true)
              return <span>✔️</span>
            }
            else if (password !== confirmed){
              setPassMatch(false)
              return <span>❌</span>
            }
        };
    }
    
    // const handleConfirmation2 = () => {
    //     if (password && confirmed) {
    //         if (password === confirmed) return <span>✔️</span>
    //         else { return <span color="red">❌</span> }
    //     }
    // }

    const handleValidation = (e) => {
      console.log("PASSWORD: " + password)
      const requirements = new RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$");
      const result = requirements.test(password) 
      setValid(result)     
    }
    
    useEffect(() => {
        fetch(`/users`)              
        .then((resp) => resp.json())
        .then((data) => setUserId(data.length))                 
    }, [])
    
    const resetForm = () => {
        setFirstName("")
        setLastName("")
        setEmail("")
        setUserName("")
        setPassword("")
        setConfirmed("")
    }  

    const handleSubmit = (e) => {
        e.preventDefault();  
        
        handleValidation();

        if (valid) {        
          
          const userInfo = {
              first_name: firstName,
              last_name: lastName,
              email: email,
              username: username,
              password_digest: password,          
          };
          fetch(`/users`, {
              method: 'POST',
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(userInfo),
          })
              .then((r) => r.json())
              .then((data) => {
                  alert("Account has been sucessfully created!!!")
                  resetForm()
          }) 
      }             
    }            
    

    return (     
      <>             
            <h2>Register</h2>
            <Box
              component="form"
              sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
              noValidate
              autoComplete="off"              
            >                
                  <TextField
                    required
                    id="standard-required"
                    label="First Name"
                    defaultValue={firstName}
                    variant="standard"
                    onChange={(e)=>setFirstName(e.target.value)}
                  />
                  <TextField
                    required
                    id="standard-required"
                    label="Last Name"
                    defaultValue={lastName}
                    variant="standard"
                    onChange={(e)=>setLastName(e.target.value)}
                  />
                  <TextField
                    required
                    id="standard-required"
                    label="Email"
                    defaultValue={email}
                    variant="standard"
                    onChange={(e)=>setEmail(e.target.value)}
                  />                    
                  <TextField
                    required
                    id="standard-required"
                    label="Username"
                    defaultValue={username}
                    variant="standard"
                    onChange={(e)=>setUserName(e.target.value)}
                  />                   
                  <TextField
                    required
                    error={error}
                    helperText={helperText}
                    id={id}
                    label="Password"
                    type="password"
                    defaultValue={password}
                    variant="standard"
                    onChange={(e)=>setPassword(e.target.value)  }                                              
                  />  
                    {handleConfirmation1()}                             
                  <TextField
                    required
                    id="standard-password-input"
                    label="Confirm Password" 
                    type="password"                  
                    defaultValue={confirmed}
                    variant="standard"
                    onChange={(e)=>setConfirmed(e.target.value)  }                    
                  />
                    {handleConfirmation1()}                    
                  <Button type="submit" disabled={disable} variant="solid" size="md" color="primary" onClick={(e)=>handleSubmit(e)}>
                    Submit
                  </Button>
            </Box>   
      </>      
    )
}

export default Register;