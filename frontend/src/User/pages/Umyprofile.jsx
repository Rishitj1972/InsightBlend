import { Avatar, Box, Button } from "@mui/material";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Feed from "../components/Feed";
import { useParams } from "react-router-dom";

const Myprofile = ({fetchFollowers,fetchPlaylistFuction}) => {
  
  const [photo, setPhoto] = useState([]);
  const { Id } = useParams();
  const [videos, setVideo] = useState([]);
  const [follow, setFollow] = useState(true);
  const uId = sessionStorage.getItem("Uid");


  const handleSubmit = () => {
    const data = {
      user_id: uId,
      showrunner_id: Id,
    };
    axios.post("http://localhost:5000/Follower", data).then((response) => {
      console.log(response.data);
      fetchFollow();
      fetchFollowers()
    });
  };

  const handledelete = () => {
    axios.delete(`http://localhost:5000/Follower/${Id}/${uId}`).then((response) => {
      console.log(response.data);
      fetchFollow();
      fetchFollowers()
    });
  };

  const fetchFollow = useCallback(() => {
    axios.get(`http://localhost:5000/Follower/${Id}/${uId}`).then((response) => {
      console.log(response.data.follow);
      setFollow(response.data.follow);
    });
  }, [Id, setFollow, uId]);

  useEffect(() => {
    const fetchHost = () => {
      axios.get(`http://localhost:5000/Showrunner/${Id}`).then((response) => {
        console.log(response.data.showrunner);
        setPhoto(response.data.showrunner);
      });
    };

    const fetchFeed = () => {
      axios
        .get(`http://localhost:5000/ShowrunnerUpload/${Id}`)
        .then((response) => {
          console.log(response.data.upload);
          setVideo(response.data.upload);
        });
    };

    fetchHost();
    fetchFeed();
    fetchFollow();
  }, [Id, fetchFollow]);

  

  return (
    <Box sx={{ overflowY: "scroll", height: 600 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          height: "35rem",
          // boxShadow: "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
          backgroundColor: "#151414",
        }}
      >
        <Box
          sx={{
            marginLeft: "4px",
            display: "flex",
          }}
        >
          <Avatar
            alt="Cindy Baker"
            sx={{ width: "350px", height: "350px", overflow: "hidden" }}
            src={photo.showrunner_photo}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              flexDirection: "column",
              marginLeft: "60px",
              gap: "30px",
            }}
          >
            <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>Podcast</h3>
            <h1 style={{ fontSize: "30px", marginBottom: "15px" }}>
              {photo.showrunner_username}
            </h1>
            <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>
              {photo.showrunner_name}
            </h2>
            <h3 style={{ fontSize: "20px" }}>{photo.showrunner_email}</h3>
          </Box>
        </Box>
        <Button
          sx={{ m: 5 }}
          variant={follow ? "contained" : "outlined"}
          onClick={follow ? handleSubmit : handledelete}
        >
         {follow ? 'Follow': 'UnFollow'} 
        </Button>
      </Box>
      <Feed videos={videos} fetchPlaylistFuction={fetchPlaylistFuction} />
    </Box>
  );
};

export default Myprofile;
