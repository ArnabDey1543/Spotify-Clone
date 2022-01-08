import React from "react";
import "../styles/RightMenu.css";
import { FaCrown, FaRegHeart, FaBell, FaSun, FaCogs } from "react-icons/fa";
import Profile from '../img/profile.jpg';

function RightMenu() {
  return (
    <div className="rightMenu">
      <div className="goPro">
        <i>
          <FaCrown />
          <p>
            Go <span>Pro</span>
          </p>
        </i>
        <i>
          <FaBell />
        </i>
        <i>
          <FaRegHeart />
        </i>
      </div>
      <div className="profile">
        <i>
          <FaSun />
        </i>
        <i>
          <FaCogs />
        </i>
        <div className="profileMage">
            <img src={Profile} alt="" />
        </div>
      </div>
    </div>
  );
}

export { RightMenu };
