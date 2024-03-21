import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./formSource";
import Category from "./pages/Category";
import Sidebar from "./components/sidebar/Sidebar";
import NavBar from "./components/navbar/Navbar";
import Genres from "./pages/Genres";
import Certification from "./pages/Certification";
import Language from "./pages/Language";
import Report from "./pages/Report";
import Verification from "./pages/Verification";

function App() {
  return (
    <div className="App">
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/Genres" element={<Genres />} />
          <Route path="/Certification" element={<Certification/>}/>
          <Route path="/Language" element={<Language/>}/>
          <Route path="/Report" element={<Report/>}/>
          <Route path="/Verify" element ={<Verification/>} />
        </Routes>
        </div>

      </div>
    </div>
  );
}

export default App;
