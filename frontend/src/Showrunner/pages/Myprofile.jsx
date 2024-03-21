import { Avatar, Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Feed from "../components/Feed";

const Myprofile = () => {

  const Id = sessionStorage.getItem("Sid");

  const [Hostname, setHostName] = useState("");
  const [Hostusername, setHostUsername] = useState("");
  const [Hostemail, setHostEmail] = useState("");
  const [HostPhoto,setHostPhoto] = useState("");

  const fetchHost = () => {
    axios.get(`http://localhost:5000/Showrunner/${Id}`).then((response) => {
      const data = response.data.showrunner;
      setHostName(data.showrunner_name);
      setHostUsername(data.showrunner_username);
      setHostEmail(data.showrunner_email);
      setHostPhoto(data.showrunner_photo);
    });
  };


  useEffect(() => {
    fetchHost();
  }, []);

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
              src={HostPhoto}
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
              <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
                Podcast
              </h3>
              <h1 style={{ fontSize: "30px", marginBottom: "15px" }}>
                {Hostusername}
              </h1>
              <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>
                {Hostname}
              </h2>
              <h3 style={{ fontSize: "20px" }}>{Hostemail}</h3>
            </Box>
          </Box>
      </Box> 
      <Feed />
    </Box>
  );
};

export default Myprofile;
