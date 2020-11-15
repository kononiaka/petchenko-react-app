import React from "react";
import "./Footer.css";
import logo from "../../img/graf-logo-black.jpg";

const Footer = () => {
  return (
    <a className="footer-href" href="mailto:kononiaka.vladimir@gmail.com">
      <h6 className="footer">
        <span>powered by </span>
        <img src={logo} alt={"logo"} />
        Graf Studio
      </h6>
    </a>
  );
};

export default Footer;
