import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Link } from "react-router-dom";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/" className="link">
          <span className="logo">UFC admin page</span></Link>
        </div>

        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2 </span>
          </div>
          <div className="topbarIconContainer">
            <Language/>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings/>
            <span className="topIconBadge">2</span>
          </div>
          <img src="avatar.jpg"alt=""className="topAvatar"/>
        </div>
      </div>
    </div>
  );
}
