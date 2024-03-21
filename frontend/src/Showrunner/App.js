import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import {Routes,Route} from 'react-router-dom';
import Changepassword from "./pages/Changepassword";
import Myprofile from "./pages/Myprofile";
import Editprofile from "./pages/Editprofile";

function App() {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"} fontFamily={"text.name"}>
          <Navbar />
        <Box sx={{mx:2}}>
          <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
            <Sidebar setMode={setMode} mode={mode} />
            <Box sx={{flex:4.3}}>

            <Routes>
              <Route path="/password" element={<Changepassword/>}/>
              <Route path="/" element={<Myprofile/>}/>
              <Route path="/editprofile" element={<Editprofile/>}/>
            </Routes>
            </Box>
            {/* <Feed /> */}
            <Rightbar />
          </Stack>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
