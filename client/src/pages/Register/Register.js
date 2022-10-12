import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
//import "./register.css"

function Register() {

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [username, setUserName ] = useState();
    const [password, setPassword] = useState();
    const [confirmed, setConfirmed] = useState();
    const [userId, setUserId] = useState();

    let disable = !(password && confirmed && password === confirmed)

    const handleConfirmation1 = () => {
        if (password && confirmed) {
            if (password === confirmed) return <span>✔️</span>                
        }
    }
    
    const handleConfirmation2 = () => {
        if (password && confirmed) {
            if (password === confirmed) return <span>✔️</span>
            else { return <span color="red">❌</span> }
        }
    }

    const handleValidation = () => {
      const requirements = new RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$");
      const valid = password.test(requirements)
      let type
      valid! ? type

      

    }

    
    useEffect(() => {
        fetch(`http://localhost:4000/users/`)              
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
        
        const userInfo = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            username: username,
            password: password,
            inventories: [{
                inventoryName: "",
                inventory: [{
                    name: "",
                    price: 0,
                    quantity: 0,
                    condition: "",
                    description: "",
                }]
            }],
            userId: userId
        };
        fetch(`http://localhost:4000/users`, {
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
    

    return (     
      <>             
            <h2>Register</h2>
            <Box
              component="form"
              sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >                
                  <TextField
                    required
                    id="standard-required"
                    label="First Name"
                    defaultValue=""
                    variant="standard"
                    onChange={(e)=>setFirstName(e.target.value)}
                  />
                  <TextField
                    required
                    id="standard-required"
                    label="Last Name"
                    defaultValue=""
                    variant="standard"
                    onChange={(e)=>setLastName(e.target.value)}
                  />
                  <TextField
                    required
                    id="standard-required"
                    label="Email"
                    defaultValue=""
                    variant="standard"
                    onChange={(e)=>setEmail(e.target.value)}
                  />                    
                  <TextField
                    required
                    id="standard-required"
                    label="Username"
                    defaultValue=""
                    variant="standard"
                    onChange={(e)=>setUserName(e.target.value)}
                  />                   
                  <TextField
                    required
                    error={error}
                    helperText={helperText}
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    defaultValue=""
                    variant="standard"
                    onChange={(e)=>setPassword(e.target.value)}                                
                  />  
                    {handleConfirmation1()}                             
                  <TextField
                    required
                    id="standard-password-input"
                    label="Confirm Password"                   
                    defaultValue=""
                    variant="standard"
                    onChange={(e)=>setConfirmed(e.target.value)}
                  />
                    {handleConfirmation1()}                
            </Box>   
      </>      
    )
}

export default Register;