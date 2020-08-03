import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <div className="header col-3">
        <Link className="header-text" to="/">
          MATVIETS &nbsp; VLADIMIR
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Header;
