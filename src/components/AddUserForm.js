import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import TaskIcon from '@mui/icons-material/Task';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';




export const AddUserForm = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    OrgID: '',
    UserID: '',
    valid: false
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const navigate = useNavigate();
    
  const addNewUser = () => {
    console.log('user has been added WHOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')
    navigate('/homepage', {state: user}); // redirect to new page
  };
  return (
    <div className='rectangle'>
      
      <Typography align="center" variant="h2" paddingTop={2} paddingBottom={2}>
        Login
      </Typography>
      <div className='addUserForm'>
      <TextField size='small' 
      id="outlined-basic" 
      label="First Name" 
      name='firstName'
      variant="outlined" 
      value={user.firstName} 
      onChange={handleInputChange} />
      
<TextField size='small' 
      id="outlined-basic" 
      label="Last Name" 
      name='lastName'
      variant="outlined" 
      value={user.lastName} 
      onChange={handleInputChange} />
</div>
<div className='addUserForm'>
<TextField fullWidth size='small' 
      id="email" 
      label="Email" 
      variant="outlined" 
      value={user.email} 
      onChange={handleInputChange}
      name='email'/>
</div>
<div className='addUserForm'>
<TextField fullWidth size='small' 
      id="outlined-basic" 
      label="User ID" 
      variant="outlined" 
      value={user.UserID} 
      onChange={handleInputChange}
      name='UserID'/>
</div>
<div className='addUserForm'>
<TextField fullWidth size='small' 
      id="outlined-basic" 
      label="Organization ID" 
      variant="outlined" 
      value={user.OrgID} 
      onChange={handleInputChange} 
      name='OrgID'/>
      <Button size='big' disabled={!user.firstName} variant='outlined' onClick={addNewUser} paddingTop={2}>
       <TaskIcon/>save
      </Button>  
      <h1>{user.firstName}{user.lastName}{user.email}{user.UserID}{user.OrgID}</h1>
      </div>
    </div>
  )
}


 