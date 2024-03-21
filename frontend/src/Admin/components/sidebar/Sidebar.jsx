import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import {Link} from "react-router-dom"


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{textDecoration:'none'}}>
        <span className="logo">InsightBlend</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
          <DashboardIcon className="icons"/>
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{textDecoration:'none'}}>
          <li>
          <PersonOutlineOutlinedIcon className="icons"/>
            <span>Users</span>
          </li>
          </Link>
          <Link to="/products" style={{textDecoration:'none'}}>
          <li>
            <Inventory2OutlinedIcon className="icons"/>
            <span>Products</span>
          </li>
          </Link>
          <li>
            <ShoppingBagOutlinedIcon className="icons"/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className="icons"/>
            <span>Delivery</span>
          </li>
          {/* <p className="title">USEFUL</p>
          <li>
            <QueryStatsOutlinedIcon className="icons"/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneOutlinedIcon className="icons"/> 
            <span>Notifications</span>
          </li> */}
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icons"/>
            <span>System Health</span>
          </li>
          <li>
          <PsychologyOutlinedIcon className="icons"/>
            <span>Logs</span>
          </li>
          <li>
          <SettingsOutlinedIcon className="icons"/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icons"/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className="icons"/>
            <span>LogOut</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
