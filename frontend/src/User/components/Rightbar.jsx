import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  Divider,
  IconButton,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ScrollBox = {
  display: { xs: "none", sm: "block" },
  backgroundColor: "#222831",
  borderRadius: "20px",
  height: "82vh",
  overflowY: "scroll",
  WebkitOverflowScrolling: "touch", // For smoother scrolling on iOS devices

  /* Customize the scrollbar */
  scrollbarWidth: "thin", // Firefox
  scrollbarColor: "#222831 #151414", // Firefox 151414

  "&::-webkit-scrollbar": {
    width: "5px", // Set the width of the scrollbar
  },

  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#222831", // Set the color of the scrollbar thumb
    borderRadius: "5px", // Set the border radius of the thumb
  },

  "&::-webkit-scrollbar-track": {
    backgroundColor: "#222831", // Set the color of the scrollbar track
  },

  /* Make the scrollbar visible when scrolling */
  "&:hover::-webkit-scrollbar-thumb": {
    backgroundColor: "#222831", // Change the color on hover
  },
};

const Rightbar = ({ followers, playlist }) => {
  console.log(playlist);

  return (
    <Box flex={2} p={2} sx={ScrollBox}>
      <Box width={300} mt={2} mb={2}>
        <Typography
          variant="h5"
          fontFamily={"Nunito,san-serif"}
          fontWeight={300}
          sx={{ ml: "10px", mb: "20px", fontStyle: "normal", fontSize: "30px" }}
        >
          Playlists
        </Typography>
        <Box
          sx={{
            width: "370px",
            height: "300px",
            display: "flex",
            alignItems: "center",
            // borderRadius: "20px",
            flexDirection: "column",
            justifyContent: "flex-start",
            background: "#222831",
            overflowY: "scroll",
            overflowX: "hidden",
            "&::-webkit-scrollbar": {
              width: "15px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#222831",
              // 7A7A7A
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#222831",
            },
            mb: 3,
            pb: 3,
            maxHeight: "82vh",
            ml: "7px",
          }}
        >
          {playlist.map((playlst, key) => (
            <Box
              sx={{
                width: "360px",
                height: "80px",
                display: "flex",
                ml: "10px",
                mb: "10px",
              }}
            >
              <Avatar
                alt="Joe Rogan"
                variant="square"
                sx={{ width: "80px", height: "80px", borderRadius: "10px" }}
                src={playlst.upload_thumbnail}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  ml: "20px",
                  mb: "10px",
                }}
              >
                <Typography sx={{ mb: "5px" }} fontFamily={"Nunito,san-serif"}>
                  {playlst.upload_title}
                </Typography>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <Typography
                    fontFamily={"Nunito,san-serif"}
                    sx={{ color: "gray" }}
                  >
                    {playlst.showrunner_name}
                  </Typography>
                  <Typography
                    fontFamily={"Nunito,san-serif"}
                    sx={{ color: "gray" }}
                  >
                    <span style={{ margin: "0 0.5ch" }}> &bull; </span>Duration
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        <Typography
          variant="h5"
          fontFamily={"Nunito,san-serif"}
          fontWeight={300}
          sx={{ ml: "10px", mb: "20px", fontStyle: "normal", fontSize: "30px" }}
        >
          Following
        </Typography>
        <Box
          sx={{
            width: "370px",
            height: "300px",
            display: "flex",
            alignItems: "center",
            borderRadius: "20px",
            flexDirection: "column",
            background: "#222831",
            overflowY: "scroll",
            overflowX: "hidden",
            "&::-webkit-scrollbar": {
              width: "15px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#7A7A7A",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#222831",
            },
            mb: 3,
            pb: 3,
          }}
        >
          {followers.map((follower, key) => (
            <Box
              sx={{
                width: "360px",
                height: "80px",
                display: "flex",
                ml: "10px",
                mb: "10px",
                mt: "20px",
              }}
            >
              {console.log(follower)}
              <Avatar
                alt="image"
                variant="square"
                sx={{ width: "80px", height: "80px", borderRadius: "10px" }}
                src={follower.showrunner_photo}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  ml: "20px",
                }}
              >
                <Typography
                  sx={{ mb: "10px" }}
                  fontFamily={"Nunito,san-serif"}
                  variant="h6"
                >
                  {follower.showrunner_name}
                </Typography>
                <Link to={`/User/Profile/${follower.showrunner_id}`}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#16191e",
                      color: "white",
                      mr: "50px",
                      height: "50px",
                      fontStyle: "oblique",
                      fontFamily: "Nunito,san-serif",
                      width: "100px",
                      borderRadius: "20px",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    Podcast
                  </Button>
                </Link>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Rightbar;
