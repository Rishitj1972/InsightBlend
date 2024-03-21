import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Editprofile = () => {
  const Id = sessionStorage.getItem("Sid");

  const [Hostname, setHostName] = useState("");
  const [Hostusername, setHostUsername] = useState("");
  const [Hostemail, setHostEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      showrunner_name: Hostname,
      showrunner_username: Hostusername,
      showrunner_email: Hostemail,
    };

    axios.patch(`http://localhost:5000/HostUpdate/${Id}`,data).then((response) => {
      console.log(response.data);
     
      fetchHost()
    });
  };

  const fetchHost = () => {
    axios.get(`http://localhost:5000/Showrunner/${Id}`).then((response) => {
      const data = response.data.showrunner;
      setHostName(data.showrunner_name);
      setHostUsername(data.showrunner_username);
      setHostEmail(data.showrunner_email);
    });
  };


  useEffect(() => {
    fetchHost();
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        // width:"40rem",
        // height:"40rem",
        // margin:"auto",
        // marginTop:"40px",
        // backgroundColor:"#FBF9F1",
        // borderRadius:"10px",
      }}
    >
        <Box
          sx={{
            fontSize: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginBottom: "120px",
            mt: "120px",
          }}
        >
          <h1 style={{ fontSize: "40px", marginBottom: "50px" }}>
            Edit Profile
          </h1>

          <h1 style={{ fontSize: "18px" }}>Name</h1>
          <TextField
            id="outlined-basic"
            sx={{ width: 500, maxWidth: "100%" }}
            variant="outlined"
            value={Hostname}
            onChange={(event) => setHostName(event.target.value)}
          />

          <h1 style={{ fontSize: "18px" }}>Host name</h1>
          <TextField
            id="outlined-basic"
            sx={{ width: 500, maxWidth: "100%" }}
            variant="outlined"
            value={Hostusername}
            onChange={(event) => setHostUsername(event.target.value)}

          />

          <h1 style={{ fontSize: "18px" }}>Email</h1>
          <TextField
            id="outlined-basic"
            sx={{ width: 500, maxWidth: "100%" }}
            variant="outlined"
            value={Hostemail}
            onChange={(event) => setHostEmail(event.target.value)}

          />
          <Box
            sx={{
              display: "flex",
              mt: "20px",
              justifyContent: "end",
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: "120px",
                height: "40px",
                borderRadius: "20px",
                "&:hover": { transform: "scale(1.05)" },
              }}
              onClick={handleSubmit}
            >
              Save
            </Button>
          </Box>
        </Box>
    </Box>
  );
};

export default Editprofile;
