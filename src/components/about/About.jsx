import React from "react";
import Img from "../../img/no_img_works.jpg";
import Links from "./../links/Links";
import Header from "./../header/Header";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="container-custom">
        <Header></Header>
        <div className="row">
          <Links></Links>
          <div className="col-2"></div>
          <div className="about-img col">
            <img src={Img} alt="" />
            <h6 className="works-text">
              Sorry. This content is currently unavailable
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
