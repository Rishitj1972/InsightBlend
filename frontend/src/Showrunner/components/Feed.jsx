import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Post from './Post'
import axios from 'axios'
import { Upload } from '@mui/icons-material'


 const ScrollBox = {
  height: '81vh',
  overflowY: 'scroll',
  WebkitOverflowScrolling: 'touch', // For smoother scrolling on iOS devices

  /* Customize the scrollbar */
  scrollbarWidth: 'thin', // Firefox
  scrollbarColor: '#151414 #151414', // Firefox

  '&::-webkit-scrollbar': {
    width: '5px', // Set the width of the scrollbar
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#151414', // Set the color of the scrollbar thumb
    borderRadius: '5px', // Set the border radius of the thumb
  },

  '&::-webkit-scrollbar-track': {
    backgroundColor: '#151414', // Set the color of the scrollbar track
  },

  /* Make the scrollbar visible when scrolling */
  '&:hover::-webkit-scrollbar-thumb': {
    backgroundColor: '#151414', // Change the color on hover
  },
}

const Feed = () => {
  const [video, setVideo] = useState([]);

  
  const Id = sessionStorage.getItem("Sid");

  const fetchVideo = () => {
    axios.get(`http://localhost:5000/Upload/${Id}`).then((response) => {
      console.log(response.data.upload);
      setVideo(response.data.upload)
    });
  };

  useEffect(() => {
    fetchVideo();
  }, []);
  return (
    <Box  flex={4} p={2} sx={ScrollBox}>
        {video.map((videos, index) => (
        <Post key={index} videos={videos} />
      ))}
    </Box>
  )
}

export default Feed 