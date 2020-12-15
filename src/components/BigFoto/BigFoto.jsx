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

const BigFoto = (props) => {
  const screenWidth = window.screen.width;

  const urlPath = window.location.pathname;

  const background =
    screenWidth < 451 && urlPath === "/"
      ? `url(${smallBackground}`
      : `url(${props.bcg})`;

  const bcgSize =
    urlPath === "/collection/:id" && screenWidth > 451
      ? "50%"
      : urlPath === "/collection/:id" && screenWidth < 451
      ? ""
      : "cover";

  const mainText =
    screenWidth < 451 ? "Petchenko Anatoliy" : `Petchenko  Anatoliy`;

  const scrollingAnchor = screenWidth > 451 ? 975 : 800;

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
          {mainText}
        </Link>
        <h1 className="main-text-name">{props.name}</h1>
        <Bounce>
          <div
            onClick={() => {
              window.scroll({
                top: scrollingAnchor,
                left: 0,
                behavior: "smooth",
              });
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

export default BigFoto;
