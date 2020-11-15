import React from "react";
import "./Main.css";
import Gallery from "../gallery/Gallery";
import Links from "../links/Links";
import ToggleButton from "../ToggleButton/ToggleButton";
import Footer from "../Footer/Footer";
import BigFoto from "../BigFoto/BigFoto";
import Background from "../../img/JB1A6883.jpg";

const Main = (props) => {
  return (
    <>
      <BigFoto bcg={Background}></BigFoto>
      <div
        style={{
          height: "100%",
        }}
        className="container-custom"
      >
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
      <Footer></Footer>
    </>
  );
};

export default Main;
