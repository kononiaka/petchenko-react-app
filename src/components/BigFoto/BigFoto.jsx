import React from "react";
import "./BigFoto.css";
import styled, { keyframes } from "styled-components";
import { flash } from "react-animations";
import { Link } from "react-router-dom";
import smallBackground from "../../img/IMG_6466.jpg";

const Bounce = styled.div`
  position: absolute;
  top: 85%;
  z-index: 999;
  animation: 7s ${keyframes`${flash}`} infinite;
`;

const bigFoto = (props) => {
  const screenWidth = window.screen.width;

  const urlPath = window.location.pathname;

  const background =
    screenWidth < 451 && urlPath === "/"
      ? `url(${smallBackground}`
      : `url(${props.bcg})`;

  const bcgSize =
    urlPath === "/collection/viktoria_g" && screenWidth > 451
      ? "50%"
      : urlPath === "/collection/viktoria_g" && screenWidth < 451
      ? "100%"
      : "";
  return (
    <>
      <div
        style={{
          backgroundImage: background,
          backgroundSize: bcgSize,
          backgroundPositionX: bcgSize,
        }}
        className="photo"
      >
        <Link className="main-text-text" to="/">
          Petchenko &nbsp; Anatoliy
        </Link>
        <h1 className="main-text-name">{props.name}</h1>
        <Bounce>
          <div
            onClick={() => {
              window.scroll({ top: 975, left: 0, behavior: "smooth" });
            }}
            className="icon"
          >
            <div className="arrow"></div>
          </div>
        </Bounce>
        <div className="countur"></div>
      </div>
    </>
  );
};

export default bigFoto;
