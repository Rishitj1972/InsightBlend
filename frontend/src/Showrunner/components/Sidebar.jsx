import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import React from "react";
import { AccountBox, Article, Group, Home, Mode, ModeNight, Person, Settings, Storefront } from '@mui/icons-material'
import Add from "./Add";
const Sidebar = ({mode,setMode}) => {
  return (
    <Box
      flex={1.1}
      p={4}
      // 
      sx={{ display: { xs: "none", sm: "block" },backgroundColor:"#222831",borderRadius:"20px",height:"100"}}
    >
      {/* position="fixed" */}
      <Box >
      <List>
      <ListItem disablePadding >
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                {/* <ModeNight /> */}
              </ListItemIcon>
              {/* <Switch onChange={e=>setMode(mode === "dark" ? "light" : "dark")}/> */}
            </ListItemButton>
          </ListItem>
        </List>
        </Box>
        <Add />

    </Box>
  );
};

export default Sidebar;
