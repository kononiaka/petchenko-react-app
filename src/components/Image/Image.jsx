import React from "react";
import "./Image.css";
import { useHistory } from "react-router";

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
    </>
  );
};

export default Image;
