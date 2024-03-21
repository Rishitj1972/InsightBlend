import {
  Box,
  Button,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from "axios";

const Showreg = () => {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [HostName, setHostName] = useState("");
  const [HostEmail, setHostEmail] = useState("");
  const [HostPassword, setHostPassword] = useState("");
  const [HostUname, setHostUname] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      showrunner_name: HostName,
      showrunner_email: HostEmail,
      showrunner_password: HostPassword,
      showrunner_username: HostUname,
    };
    axios.post("http://localhost:5000/Showrunner", data).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "35rem ",
          height: "40rem",
          margin: "auto",
          mt: "50px",
          padding: "10px",
          borderRadius: "10px",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              fontWeight: "bold",
              color: "#76453B",
              marginTop: "20px",
              marginBottom: "40px",
            }}
          >
            ShowRunner Registration
          </h1>
          <Box
            sx={{
              width: "300px",
            }}
          >
            <TextField
              id="filled-basic"
              label="Name"
              variant="filled"
              sx={{
                width: "100%",
                mb: "30px",
              }}
              onChange={(event) => setHostName(event.target.value)}
              value={HostName}
            />
            <TextField
              id="filled-basic"
              label="e-mail"
              variant="filled"
              sx={{
                width: "100%",
                mb: "30px",
              }}
              onChange={(event) => setHostEmail(event.target.value)}
              value={HostEmail}
            />
            <TextField
              id="filled-basic"
              label="Username"
              variant="filled"
              sx={{
                width: "100%",
                mb: "30px",
              }}
              onChange={(event) => setHostUname(event.target.value)}
              value={HostUname}
            />
            <FormControl
              sx={{
                width: "100%",
                mb: "30px",
              }}
              variant="filled"
              onChange={(event) => setHostPassword(event.target.value)}
              value={HostPassword}
            >
              <InputLabel htmlFor="filled-adornment-password">
                Password
              </InputLabel>
              <FilledInput
                id="filled-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Box sx={{
                display:"flex" ,
                alignItems:"center",
                flexDirection:"column",
                mb:1
            }}>
            <Button sx={{mb:1}}
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload Photo
              <VisuallyHiddenInput type="file" />
            </Button>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload Proof
              <VisuallyHiddenInput type="file" />
            </Button>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            mt: -1,
            mb: 1,
          }}
        ></Box>
        <Box
          sx={{
            mt: "20px",
          }}
        >
          <Button
            sx={{
              backgroundColor: "#B19470",
              "&:hover": {
                backgroundColor: "#76453B",
              },
              height: "40px",
              width: "150px",
              borderRadius: "30px",
            }}
            variant="contained"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Showreg;
