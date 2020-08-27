import React from "react";
import "./toggleButton.css";

const ToggleButton = (props) => {
  return (
    <div onClick={props.toggleMenu} className="sidebar-toggle">
      <div className="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default ToggleButton;
