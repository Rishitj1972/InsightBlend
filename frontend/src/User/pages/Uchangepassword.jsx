import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const Changepassword = () => {
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
        <h1 style={{fontSize:"40px",marginBottom:"50px"}}>Change Password</h1>

        <h1 style={{fontSize:"18px"}}>Old Password</h1>
        <TextField id="outlined-basic" sx={{ width: 500,maxWidth: '100%',}} variant="outlined" />
        
        <h1 style={{fontSize:"18px"}}>New Password</h1>
        <TextField id="outlined-basic" sx={{ width: 500,maxWidth: '100%',}} variant="outlined" />
        
        <h1 style={{fontSize:"18px",}}>Re-Password</h1>
        <TextField id="outlined-basic" sx={{ width: 500,maxWidth: '100%',}} variant="outlined" />
        <Box sx={{
            display:"flex",
            mt:"20px",
            justifyContent:"end",
        }}>
        <Button variant="contained" sx={{width:"120px", height:"40px",borderRadius:"20px", backgroundColor:"#232D3F", '&:hover': {backgroundColor: "#232D3F",transform: 'scale(1.05)' }}}>Submit</Button>
        </Box>
        </Box>
    </Box>
)
}

export default Changepassword