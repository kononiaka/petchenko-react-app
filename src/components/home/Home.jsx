import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="main">
        <Link className="enter-site-btn" to="/works">
          Enter
        </Link>

        <a
          target="_blank"
          rel="noopener noreferrer"
          className="home nav-link-custom"
          href="https://www.instagram.com/matviets_vladimir_artist/">
          <i className="home fab fa-instagram"></i>
        </a>
      </div>
    </>
  );
};

export default Home;
