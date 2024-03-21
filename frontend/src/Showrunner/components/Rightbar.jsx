import {
  Avatar,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";

const ScrollBox = {
  display: { xs: "none", sm: "block" },
  backgroundColor: "#222831",
  borderRadius:'20px',
  height: "82vh",
  overflowY: "scroll",
  WebkitOverflowScrolling: "touch", // For smoother scrolling on iOS devices

  /* Customize the scrollbar */
  scrollbarWidth: "thin", // Firefox
  scrollbarColor: "#222831 #151414", // Firefox

  "&::-webkit-scrollbar": {
    width: "5px", // Set the width of the scrollbar
  },

  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#222831", // Set the color of the scrollbar thumb
    borderRadius: "5px", // Set the border radius of the thumb
  },

  "&::-webkit-scrollbar-track": {
    backgroundColor: "#222831", // Set the color of the scrollbar track
  },

  /* Make the scrollbar visible when scrolling */
  "&:hover::-webkit-scrollbar-thumb": {
    backgroundColor: "#222831", // Change the color on hover
  },
};



const Rightbar = () => {

  
  const [videos, setVideo] = useState([]);

  const Id = sessionStorage.getItem("Sid");

  const fetchVideo = () => {
    axios.get(`http://localhost:5000/Upload/${Id}`).then((response) => {
      console.log(response.data.upload);
      setVideo(response.data.upload)
    });
  };


  const handledelete = (upload_id) => {
    axios
      .delete(`http://localhost:5000/Upload/${upload_id}`)
      .then((response) => {
        console.log(response.data);
        fetchVideo();
      });
  };



  useEffect(() => {
    fetchVideo();
  }, []);


  return (
    <Box flex={2} p={2} sx={ScrollBox}>
      <Box width={300} mt={2} mb={2}>
        <Typography
          variant="h5"
          fontFamily={"Nunito,san-serif"}
          fontWeight={300}
          sx={{ ml: "10px", mb: "50px" }}
        >
        Uploaded Videos
        </Typography>
        <Box
          sx={{
            width: "370px",
            height: "450px",
            display: "flex",
            alignItems: "center",
            // borderRadius: "20px",
            flexDirection: "column",
            justifyContent: "flex-start",
            background: "#222831",
            overflowY: "scroll",
            overflowX: "hidden",
            "&::-webkit-scrollbar": {
              width: "15px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#7A7A7A",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#222831",
            },
            mb: 3,
            pb: 3,
            maxHeight: "82vh",
            ml:"7px"
          }}
        >
          {videos.map((video) => (
          <Box
            sx={{
              width: "360px",
              height: "80px",
              display: "flex",
              ml: "10px",
              mb: "10px",
            }}
          >
            <Avatar
              alt="Joe Rogan"
              variant="square"
              sx={{ width: "70px", height: "70px", borderRadius: "10px" }}
              src={video.upload_thumbnail}
              />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems:"center",
                ml: "20px",
                mb:"10px"
              }}
            >
              <Typography>{video.upload_title}</Typography>
              <Box sx={{display:"flex" , flexDirection:"row",gap:"2px"}}>
                <IconButton>
                <DeleteIcon onClick={() => handledelete(video.upload_id)}/>
                </IconButton>
              </Box>
            </Box>
          </Box>
          ))}
        </Box>
        </Box>
    </Box>
  );
};

export default Rightbar;
