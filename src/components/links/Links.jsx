import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Links.css";

class Links extends Component {
  state = {
    menuItems: [
      { name: "", isActive: false, route: "/main" },
      { name: "Gallery", isActive: false, route: "/gallery" },
      { name: "Contact", isActive: false, route: "/contact" },
    ],
    menuOpen: true,
  };

  handleClick = (name) => {
    this.setState((state) => {
      const menuItems = state.menuItems.map((item) => ({
        ...item,
        isActive: item.name === name,
      }));

      return { menuItems };
    });
  };

  render() {
    const menu = this.state.menuItems.map((item) => {
      const classes = `nav-link-custom${item.isActive ? " active" : ""}`;
      return (
        <NavLink
          key={item.name}
          onClick={() => this.handleClick(item.name)}
          className={classes}
          to={item.route}
          href="#"
          alt="1"
        >
          {item.name}
        </NavLink>
      );
    });

    return (
      <div className="nav flex-column links">
        {menu}
        <a
          className="nav-link-custom"
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/tolik_petchenko"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    );
  }
}

export default Links;
