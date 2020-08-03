import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="main">
        <div className="main-container">
          <Link className="main-text" to="/works">
            <h1 className="main-text-text">Tolik</h1>
          </Link>
          <Link className="enter-site-btn" to="/works">
            Enter
          </Link>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className="home nav-link-custom"
            href="https://instagram.com/tolik_petchenko"
          >
            <i className="home fab fa-instagram"></i>
          </a>
          <Link className="main-text" to="/works">
            <h1 className="main-text-text">Petchenko</h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
