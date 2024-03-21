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
  styled,
} from "@mui/material";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
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

const User = () => {


    const [UserName,setUserName]=useState("");
    const [UserEmail,setUserEmail]=useState("");
    const [UserPassword,setUserPassword]=useState("");
    const [UserContact,setUserContact]=useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = {
      user_name:UserName,
      user_email:UserEmail,
      user_password:UserPassword,
      user_contact:UserContact,
      user_id: 2
      }
      axios.post("http://localhost:5000/User", data).then((response) => {
        console.log(response.data);
        
      });
    };




  
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box>
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
            User Registration
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
              onChange={(event) => setUserName(event.target.value)}
              value={UserName}
            />
            <TextField
              id="filled-basic"
              label="e-mail"
              variant="filled"
              sx={{
                width: "100%",
                mb: "30px",
              }}
              onChange={(event) => setUserEmail(event.target.value)}
              value={UserEmail}
            />
            <TextField
              id="filled-basic"
              label="Contact"
              variant="filled"
              sx={{
                width: "100%",
                mb: "30px",
              }}
              onChange={(event) => setUserContact(event.target.value)}
              value={UserContact}
            />
            <FormControl
              sx={{
                width: "100%",
                mb: "30px",
              }}
              variant="filled"
              onChange={(event) => setUserPassword(event.target.value)}
              value={UserPassword}
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
          </Box>
        </Box>
        
        
        <Box sx={{
          mt:-1,
          mb:1
        }}>
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        {/* <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: "50px",
            width: "700px",
            mb: "40px",
          }}
        >
          <TableContainer
            component={Paper}
            sx={{ borderRadius: "10px", border: "1px solid black" }}
          >
            <Table sx={{ minWidth: 400 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box> */}
      </Box>
    </Box>
  );
};

export default User;
