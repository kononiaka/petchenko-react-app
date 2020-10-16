import React from "react";
import "./ToggleButton.css";

const ToggleButton = (props) => {
  const toggleClasses = `sidebar-toggle${props.show ? " open" : ""}`;

  return (
    <div onClick={props.click} className={toggleClasses}>
      <div className="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default ToggleButton;
