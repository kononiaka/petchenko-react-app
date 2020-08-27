import React, { Component } from "react";
import "./Main.css";
import Gallery from "../gallery/Gallery";
import Links from "../links/Links";
import Header from "../header/Header";
import ToggleButton from "../toggleButton/toggleButton";

class Works extends Component {
  state = {
    images: [
      { id: 1, src: require("../../img/DSC_5678.jpg") },
      { id: 2, src: require("../../img/DSC_5718.jpg") },
      { id: 3, src: require("../../img/DSC_5751.jpg") },
      { id: 4, src: require("../../img/DSC_5887.jpg") },
      { id: 5, src: require("../../img/DSC_5899.jpg") },
      { id: 6, src: require("../../img/DSC_5920.jpg") },
      { id: 7, src: require("../../img/DSC_5983.jpg") },
      { id: 8, src: require("../../img/DSC_6027-2.jpg") },
      { id: 9, src: require("../../img/DSC_6062-2.jpg") },
      { id: 10, src: require("../../img/DSC_6097-2.jpg") },
    ],
    menuOpen: false,
  };

  toggleMenu = () => {
    this.setState((prevState) => {
      console.log("click");
      return { menuOpen: !prevState.menuOpen };
    });
  };

  render() {
    return (
      <>
        <ToggleButton toggleMenu={this.toggleMenu}></ToggleButton>
        <div className="container-custom">
          <Header></Header>
          <div className="row">
            <Links show={this.state.menuOpen} />
            <div className="col">
              <Gallery elements={this.state.images} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Works;
