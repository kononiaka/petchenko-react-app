import React from "react";
import "./Image.css";
import { useHistory } from "react-router";
import Footer from "../Footer/Footer";

const Image = (props) => {
  const history = useHistory();
  return (
    <>
      <div className="imageContainer">
        <i
          onClick={() => history.goBack()}
          className="fa fa-times"
          aria-hidden="true"
        ></i>
        <img src={props.src} alt="" />
      </div>
      <Footer></Footer>
    </>
  );
};

export default Image;
