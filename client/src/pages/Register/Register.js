import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Register(){
  return (
    <div>    
        <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >      
        <div>
            <TextField
            required
            id="standard-required"
            label="First Name"
            defaultValue="First Name"
            variant="standard"
            />
            <TextField
            required
            id="standard-required"
            label="Last Name"
            defaultValue="Bear"
            variant="standard"
            />
            <TextField
            required
            id="standard-required"
            label="Username"
            defaultValue="CookieLover8"
            variant="standard"
            />
            <TextField
            required
            id="standard-required"
            label="Email"
            defaultValue="CookieLover8"
            variant="standard"
            />
            <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
            />         
        </div>
        </Box>
    </div>
  );
}

export default Register;
