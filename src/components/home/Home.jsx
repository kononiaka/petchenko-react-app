import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Link className="main" style={{ textDecoration: "none" }} to="/main">
        <h1 className="main-text-text">Tolik &nbsp; Petchenko</h1>
      </Link>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="home nav-link-custom"
        href="https://instagram.com/tolik_petchenko"
      >
        <i className="home fab fa-instagram"></i>
      </a>
    </>
  );
};

export default Home;
