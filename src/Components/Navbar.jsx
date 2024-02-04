import React, { useState } from "react";
import "../Styles/Navbar.css";
import PersonIcon from "@mui/icons-material/Person";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import logo from "../Assets/logoName.svg";
import { Link } from "react-router-dom";

function Navbar() {
    const [activeIcon, setActiveIcon] = useState('home'); // Initial active icon is 'home'
  
    const handleIconClick = (iconName) => {
      setActiveIcon(iconName);
    };
  
    return (
      <div className='navbar'>
        <div className="logo-wrapper">
          <Link to="/">
          <img src={logo} className='logo' alt='logo'/>
          </Link>
        </div>
        <div className="navlink-wrapper">
        <Link to="/">
          <div className="icon-wrapper" onClick={() => handleIconClick('home')}>
            <HomeRoundedIcon
              className={`icon ${activeIcon === 'home' ? 'active' : ''}`}
              style={{ color: activeIcon === 'home' ? '#F05A22' : '#F9DDCF' }}
            />
            {activeIcon === 'home' && <span className='active-dot'>.</span>}
          </div>
          </Link>
          <div className="icon-wrapper" onClick={() => handleIconClick('notifications')}>
            <NotificationsIcon
              className={`icon ${activeIcon === 'notifications' ? 'active' : ''}`}
              style={{ color: activeIcon === 'notifications' ? '#F05A22' : '#F9DDCF' }}
            />
            {activeIcon === 'notifications' && <span className='active-dot'>.</span>}
          </div>
          <div className="icon-wrapper" onClick={() => handleIconClick('turnedIn')}>
            <TurnedInIcon
              className={`icon ${activeIcon === 'turnedIn' ? 'active' : ''}`}
              style={{ color: activeIcon === 'turnedIn' ? '#F05A22' : '#F9DDCF' }}
            />
            {activeIcon === 'turnedIn' && <span className='active-dot'>.</span>}
          </div>
          <div className="icon-wrapper" onClick={() => handleIconClick('person')}>
            <PersonIcon
              className={`icon ${activeIcon === 'person' ? 'active' : ''}`}
              style={{ color: activeIcon === 'person' ? '#F05A22' : '#F9DDCF' }}
            />
            {activeIcon === 'person' && <span className='active-dot'>.</span>}
          </div>
        </div>
      </div>
    );
  }
  

export default Navbar;
