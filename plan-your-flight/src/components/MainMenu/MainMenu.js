import React from "react";
import "./MainMenu.css";

function MainMenu() {
  return (
    <div className="MainMenu">
      <div>
        <text>LOT </text>
      </div>
      <div class="topnav">
        <a class="active" href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
}

export default MainMenu;
