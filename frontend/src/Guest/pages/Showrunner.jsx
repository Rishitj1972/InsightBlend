import {
  Box,
  Button,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import styled from "@emotion/styled";
import axios from "axios";

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

const Showrunner = () => {
  const [ShowrunnerName, setShowrunnerName] = useState("");
  const [ShowrunnerEmail, setShowrunnerEmail] = useState("");
  const [ShowrunnerPassword, setShowrunnerPassword] = useState("");
  const [ShowrunnerPhoto, setShowrunnerPhoto] = useState([]);
  const [ShowrunnerUsername, setShowrunnerUsername] = useState("");
  const [ShowrunnerProof, setShowrunnerProof] = useState([]);

  const handleSubmit =  () => {
    console.log(ShowrunnerName,ShowrunnerEmail);
    console.log(ShowrunnerPhoto);


    const formData = new FormData();
    formData.append("showrunner_name", ShowrunnerName);
    formData.append("showrunner_email", ShowrunnerEmail);
    formData.append("showrunner_password", ShowrunnerPassword);
    formData.append("showrunner_proof", ShowrunnerProof);
    formData.append("showrunner_photo", ShowrunnerPhoto);
    formData.append("showrunner_username", ShowrunnerUsername);
   




    axios.post("http://localhost:5000/Showrunner/", formData).then((response) => {
      console.log(response.data);
    });
  };

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };

  return (
    <Box >
      <Box
        sx={{
          // backgroundColor: "#F8FAE5",
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
              onChange={(event) => setShowrunnerName(event.target.value)}
              value={ShowrunnerName}
            />
            <TextField
              id="filled-basic"
              label="e-mail"
              variant="filled"
              sx={{
                width: "100%",
                mb: "30px",
              }}
              onChange={(event) => setShowrunnerEmail(event.target.value)}
              value={ShowrunnerEmail}
            />
           
            <FormControl
              sx={{
                width: "100%",
                mb: "30px",
              }}
              variant="filled"
              onChange={(event) => setShowrunnerPassword(event.target.value)}
              value={ShowrunnerPassword}
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

            <Button
              sx={{ display: "flex" }}
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload Photo
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => setShowrunnerPhoto(event.target.files[0])}
              />
            </Button>

            <Button
              sx={{ mt: 1, display: "flex" }}
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload Proof
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => setShowrunnerProof(event.target.files[0])}
              />
            </Button>
            <TextField
              id="filled-basic"
              label="UserName"
              variant="filled"
              sx={{
                width: "100%",
                mb: "30px",
              }}
              onChange={(event) => setShowrunnerUsername(event.target.value)}
              value={ShowrunnerUsername}
            />
          </Box>
        </Box>
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

export default Showrunner;
