import Input from "antd/lib/input/Input";
import React from "react";
import "./navbar.css";

export const Navbar = ({ setSearch }) => {
  const handleChange = (e) => {
    setSearch((prev) => (prev = e.target.value));
  };
  return (
    <div>
      <div className="navbarWrapper">
        <div className="navbarLogo">LOGO</div>
        <div className="navbarSearchbar">
          <Input
            placeholder="Search for video"
            type="text"
            onChange={handleChange}
          />
          <div className="searchIcon"></div>
        </div>
        <div className="navbarProfPic">
          <img
            src="https://i.ibb.co/G3fG4p5/wallpaperflare-com-wallpaper.jpg"
            alt="profile pic"
          />
        </div>
      </div>
    </div>
  );
};
