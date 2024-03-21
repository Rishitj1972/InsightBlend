import React from "react";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import User from "./pages/User";
import Showrunner from "./pages/Showrunner";
import Showreg from "./pages/Showreg";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/User" element={<User />} />
      <Route path="/Showrunner" element={<Showrunner />} />
      <Route path="/Showregistration" element={<Showreg />} />
    </Routes>
  );
};

export default App;
