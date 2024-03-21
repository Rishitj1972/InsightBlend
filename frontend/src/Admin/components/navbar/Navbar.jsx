import  "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          {/* <input  type="text" placeholder="Search...."/>
          <SearchOutlinedIcon/> */}
          </div>
          <div className="items">
            {/* <div className="item">
            <LanguageOutlinedIcon className="icon"/>
            English
            </div> */}
            {/* <div className="item">
            <DarkModeOutlinedIcon className="icon"/>
            DarkMode
            </div> */}
            {/* <div className="item">
            <FullscreenExitOutlinedIcon className="icon"/>
            FullScreen
            </div> */}
            {/* <div className="item">
            <NotificationsNoneOutlinedIcon className="icon"/>
            <div className="counter">1</div>
            </div>
            <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon"/>
            <div className="counter">2</div>
            </div>
            <div className="item">
            <ListOutlinedIcon className="icon"/>
            List
            </div> */}
            <div className="item">
              <img 
              src="https://imgs.search.brave.com/qMqvKR51cHQbwK4Kw9HIXw0DwjJdmKE9zdVykNtcuBA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5kZWZlbnNlLmdv/di8yMDE4L0RlYy8w/Ny8yMDAyMDcwMjA1/LzEwODgvODIwLzAv/MTgxMjA0LUYtRUQ4/NTEtMDAwNS5KUEc"
              alt=""
              className="avatar"
              />
            </div>
          </div>
      </div>
    </div>
  )
}

export default NavBar