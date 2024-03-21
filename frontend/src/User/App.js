import React, { useCallback, useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Myprofile from "./pages/Umyprofile";
import Editprofile from "./pages/Ueditprofile";

const ScrollBox = {
  height: "81vh",
  overflowY: "scroll",
  WebkitOverflowScrolling: "touch", // For smoother scrolling on iOS devices

  /* Customize the scrollbar */
  scrollbarWidth: "thin", // Firefox
  scrollbarColor: "#151414 #151414", // Firefox

  "&::-webkit-scrollbar": {
    width: "5px", // Set the width of the scrollbar
  },

  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#151414", // Set the color of the scrollbar thumb
    borderRadius: "5px", // Set the border radius of the thumb
  },

  "&::-webkit-scrollbar-track": {
    backgroundColor: "#151414", // Set the color of the scrollbar track
  },

  /* Make the scrollbar visible when scrolling */
  "&:hover::-webkit-scrollbar-thumb": {
    backgroundColor: "#151414", // Change the color on hover
  },
};

function App() {
  const [mode, setMode] = useState("dark");
  const [check, setCheck] = useState(false);

  const [videos, setVideo] = useState([]);
  const [certificationName, setCertificationName] = useState(0);
  const [genresName, setGenresName] = useState(0);

  const [languageName, setLanguageName] = useState(0);

  const Id = sessionStorage.getItem("Uid");
  const [followers, setFollowers] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const fetchPlaylist = () => {
    axios.get(`http://localhost:5000/MyPlaylist/${Id}`).then((response) => {
      console.log(response.data.follow);
      setPlaylist(response.data.follow);
    });
  };

  const fetchFollowers = () => {
    axios.get(`http://localhost:5000/MyFollower/${Id}`).then((response) => {
      console.log(response.data.follow);
      setFollowers(response.data.follow);
    });
  };

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const fetchVideo = useCallback(() => {
    if (!check) {
      setCertificationName(0);
      setGenresName(0);
      setLanguageName(0);
    }
    axios
      .get(
        `http://localhost:5000/Upload/${certificationName}/${genresName}/${languageName}`
      )
      .then((response) => {
        console.log(response.data.upload);
        setVideo(response.data.upload);
      });
  }, [certificationName, genresName, languageName, check]);

  useEffect(() => {
    fetchVideo();
    fetchFollowers();
    fetchPlaylist()
  }, [fetchVideo]);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar setCheck={setCheck} check={check} />
        <Box sx={{ mx: 2 }}>
          <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
            <Sidebar setMode={setMode} mode={mode} />
            <Box flex={4} p={2} sx={ScrollBox}>
              {check && (
                <Search
                  setCertificationName={setCertificationName}
                  certificationName={certificationName}
                  setGenresName={setGenresName}
                  genresName={genresName}
                  setLanguageName={setLanguageName}
                  languageName={languageName}
                />
              )}
              <Routes>
                <Route path="/" element={<Feed videos={videos} fetchPlaylistFuction={fetchPlaylist}/>} />
                <Route
                  path="/Profile/:Id"
                  element={<Myprofile fetchFollowers={fetchFollowers} fetchPlaylistFuction={fetchPlaylist}/>}
                />
                <Route path="/editprofile" element={<Editprofile/>}/>
              </Routes>
            </Box>
            <Rightbar followers={followers} playlist={playlist} />
          </Stack>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
