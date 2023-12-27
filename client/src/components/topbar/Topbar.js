import React from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";

function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/">Home</Link>
          </li>
          <li className="topListItem">
            <Link to="/about">About</Link>
          </li>
          <li className="topListItem">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="topListItem">
            <Link to="/write">Write</Link>
          </li>
          <li className="topListItem">Logout</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default Topbar;
