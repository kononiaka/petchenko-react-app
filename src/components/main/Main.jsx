import React, { Component } from "react";
import "./Main.css";
import Gallery from "../gallery/Gallery";
import Links from "../links/Links";
import Header from "../header/Header";
import ToggleButton from "../ToggleButton/ToggleButton";

class Works extends Component {
  state = {
    images: [
      { id: 1, src: require("../../img/JB1A7112.jpg") },
      { id: 2, src: require("../../img/DSC_5887.jpg") },
      { id: 4, src: require("../../img/HM7B1003.jpg") },
      { id: 3, src: require("../../img/DSC_6399.jpg") },
      { id: 5, src: require("../../img/HM7B1036.jpg") },
      { id: 6, src: require("../../img/HM7B2818.jpg") },
      { id: 7, src: require("../../img/HM7B3988.jpg") },
      { id: 8, src: require("../../img/HM7B5559.jpg") },
      { id: 9, src: require("../../img/JB1A5035с.jpg") },
      { id: 10, src: require("../../img/JB1A6147.jpg") },
      { id: 12, src: require("../../img/JB1A6984.jpg") },
      { id: 11, src: require("../../img/JB1A6883.jpg") },
    ],
    menuOpen: false,
  };

  toggleMenu = () => {
    this.setState((prevState) => {
      return { menuOpen: !prevState.menuOpen };
    });
  };

  render() {
    return (
      <>
        <div style={{ height: "100%" }} className="container-custom">
          <Header></Header>
          <ToggleButton
            click={this.toggleMenu}
            show={this.state.menuOpen}
          ></ToggleButton>
          <div className="row">
            <Links show={this.state.menuOpen} />
            <Gallery elements={this.state.images} />
          </div>
        </div>
      </>
    );
  }
}

export default Works;
