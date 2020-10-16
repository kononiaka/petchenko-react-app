import React from "react";
import "./Main.css";
import Gallery from "../gallery/Gallery";
import Links from "../links/Links";
import Header from "../header/Header";
import ToggleButton from "../ToggleButton/ToggleButton";

const Main = (props) => {
  return (
    <>
      <div style={{ height: "100%" }} className="container-custom">
        <Header></Header>
        <ToggleButton
          click={props.toggleMenu}
          show={props.menuOpen}
        ></ToggleButton>
        <div className="row">
          <Links show={props.menuOpen} />
          <Gallery
            elements={props.images}
            imageClick={props.openImage}
            show={props.imageOpen}
            openImageId={props.openImageId}
          />
        </div>
      </div>
    </>
  );
};

export default Main;
