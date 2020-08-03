import React from "react";
import Header from "./../header/Header";
import Links from "./../links/Links";

const Exhibition = () => {
  return (
    <>
      <div className="container-custom">
        <Header></Header>
        <div className="row">
          <Links></Links>
          <div className="col-2"></div>
          <div className="col">
            <h6 className="works-text">
              Sorry. This content is currently unavailable
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exhibition;
