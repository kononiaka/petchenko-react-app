import React from "react";
import "./BigFoto.css";
import styled, { keyframes } from "styled-components";
import { flash } from "react-animations";

const Bounce = styled.div`
  position: absolute;
  top: 85%;
  z-index: 999;
  animation: 7s ${keyframes`${flash}`} infinite;
`;

const bigFoto = (props) => {
  return (
    <>
      <div style={{ backgroundImage: `url(${props.bcg}` }} className="photo">
        <h1 className="main-text-text">Petchenko &nbsp; Anatoliy</h1>
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
