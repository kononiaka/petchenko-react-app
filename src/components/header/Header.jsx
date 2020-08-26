import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <div className="inner">
            <div onClick={this.props.toggleMenu} className="sidebar-toggle">
              <div className="hamburger">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <Link className="header-text" to="/">
              TOLIK &nbsp; PETCHENKO
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
