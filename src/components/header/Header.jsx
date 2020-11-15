import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <div className="inner">
            <Link className="header-text" to="/">
              PETCHENKO&nbsp; ANATOLIY
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
