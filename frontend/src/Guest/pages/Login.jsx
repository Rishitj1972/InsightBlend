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
import axios from "axios";
import { Email } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

//Data tables

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    axios.post("http://localhost:5000/Login", data).then((response) => {
      console.log(response.data);

      const { id, login, message } = response.data;
      if (login === "user") {
        sessionStorage.setItem("Uid", id);
        navigate("../../User");
      } else if (login === "showrunner") {
        sessionStorage.setItem("Sid", id);
        navigate("../../ShowRunner");
      } else if (login === "admin") {
        sessionStorage.setItem("Aid", id);
        navigate("../../Admin");
      } else {
      }
    });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit}>
      <Box
        sx={{
          // backgroundColor: "#F8FAE5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "35rem ",
          height: "30rem",
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
            Log in
          </h1>
          <Box
            sx={{
              width: "300px",
            }}
          >
            <TextField
              id="filled-basic"
              label="e-mail"
              variant="filled"
              sx={{
                width: "100%",
                mb: "30px",
              }}
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
            <FormControl
              sx={{
                width: "100%",
                mb: "30px",
              }}
              variant="filled"
            >
              <InputLabel htmlFor="filled-adornment-password">
                Password
              </InputLabel>
              <FilledInput
                id="filled-adornment-password"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
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
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
