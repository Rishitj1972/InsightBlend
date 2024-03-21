import { Box, Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Editprofile = () => {

  const Id = sessionStorage.getItem("Uid");

  const [Username, setUserName] = useState("");
  const [UserContact, setUserContact] = useState("");
  const [Useremail, setUserEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      user_name: Username,
      user_contact: UserContact,
      user_email: Useremail,
    };

    axios.patch(`http://localhost:5000/UserUpdate/${Id}`,data).then((response) => {
      console.log(response.data);
      fetchHost()
    });
  };

  const fetchHost = () => {
    axios.get(`http://localhost:5000/User/${Id}`).then((response) => {
      const data = response.data.user;
      setUserName(data.user_name);
      setUserContact(data.user_contact);
      setUserEmail(data.user_email);
    });
  };

  useEffect(() => {
    fetchHost();
  }, []);

  return (
    <Box sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        // width:"40rem",
        // height:"40rem",
        // margin:"auto",
        // marginTop:"40px",
        // backgroundColor:"#FBF9F1",
        // borderRadius:"10px",  
    }}>
        <Box sx={{
            fontSize:"10px",
            display:"flex",
            flexDirection:"column",
            gap:"10px",
            marginBottom:"120px",
            mt:"120px"
        }}>
          <h1 style={{fontSize:"40px",marginBottom:"50px"}}>Edit Profile</h1>

        <h1 style={{fontSize:"18px"}}>Name</h1>
        <TextField id="outlined-basic" sx={{ width: 500,maxWidth: '100%',}} variant="outlined" value={Username}
            onChange={(event) => setUserName(event.target.value)}/>
        
        <h1 style={{fontSize:"18px"}}>Title</h1>
        <TextField id="outlined-basic" sx={{ width: 500,maxWidth: '100%',}} variant="outlined" value={UserContact}
            onChange={(event) => setUserContact(event.target.value)}/>
        
        <h1 style={{fontSize:"18px"}}>Email</h1>
        <TextField id="outlined-basic" sx={{ width: 500,maxWidth: '100%',}} variant="outlined" value={Useremail}
            onChange={(event) => setUserEmail(event.target.value)}/>
        <Box sx={{
          display:"flex",
          mt:"20px",
          justifyContent:"end",
        }}>
        <Button variant="contained" sx={{width:"120px", height:"40px",borderRadius:"20px", backgroundColor:"#232D3F", '&:hover': {backgroundColor: "#232D3F",transform: 'scale(1.05)' }}} onClick={handleSubmit}>Save</Button>
        </Box>
        </Box>
    </Box>
  )
}

export default Editprofile