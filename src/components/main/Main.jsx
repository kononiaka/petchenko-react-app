import React, { Component } from "react";
import "./Main.css";
import Gallery from "../gallery/Gallery";
import Links from "../links/Links";
import Header from "../header/Header";
import ToggleButton from "../ToggleButton/ToggleButton";

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
