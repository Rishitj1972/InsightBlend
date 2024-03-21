import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  // InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import Pets from "@mui/icons-material/Pets";
import Mail from "@mui/icons-material/Mail";
import SearchIcon from "@mui/icons-material/Search";
import Notifications from "@mui/icons-material/Notifications";
import { useLocation } from "react-router-dom";
const Navbar = ({ setCheck, check }) => {
  const location = useLocation();
  const isUserProfilePage = location.pathname
    .toLowerCase()
    .includes("/user/profile/");

  const [open, setOpen] = useState(false);

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  // const Search = styled(Box)(({ theme }) => ({
  //   padding: "0 10px",
  //   display: "flex",
  //   alignContent: "center",
  //   borderRadius: "20px",
  //   border: "#DDDDDD 2px solid",
  //   width: "25%",
  // }));

  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));

  return (
    <AppBar
      position="sticky"
      sx={{
        height: "80px",
        justifyContent: "center",
        backgroundColor: "#171A21",
        mb: 2,
      }}
    >
      <StyledToolbar>
        <Typography
          variant="h4"
          sx={{
            display: { xs: "none", sm: "block" },
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          Insight Blend
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        {/* <Search sx={{height:"40px",marginLeft:"auto",marginRight:"60px"}}>
          <InputBase placeholder="Search" sx={{width:"400px"}}  />
        </Search> */}

        <Icons>
          {!isUserProfilePage && (
            <IconButton onClick={() => setCheck(!check)}>
              <SearchIcon />
            </IconButton>
          )}
          {/* <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge> */}
          <Avatar
            sx={{ width: 50, height: 50 }}
            src="https://imgs.search.brave.com/qMqvKR51cHQbwK4Kw9HIXw0DwjJdmKE9zdVykNtcuBA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5kZWZlbnNlLmdv/di8yMDE4L0RlYy8w/Ny8yMDAyMDcwMjA1/LzEwODgvODIwLzAv/MTgxMjA0LUYtRUQ4/NTEtMDAwNS5KUEc"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://imgs.search.brave.com/qMqvKR51cHQbwK4Kw9HIXw0DwjJdmKE9zdVykNtcuBA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5kZWZlbnNlLmdv/di8yMDE4L0RlYy8w/Ny8yMDAyMDcwMjA1/LzEwODgvODIwLzAv/MTgxMjA0LUYtRUQ4/NTEtMDAwNS5KUEc"
          />
          <Typography variant="span">Jhon</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
