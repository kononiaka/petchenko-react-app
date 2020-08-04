import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <div className="header">
        <Link className="header-text" to="/">
          TOLIK &nbsp; PETCHENKO
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Header;
