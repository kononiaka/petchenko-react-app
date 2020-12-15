import React, { Component } from "react";
import BigFoto from "../BigFoto/BigFoto";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-component";
import "./BlockImage.css";
import Links from "../links/Links";
import ToggleButton from "../ToggleButton/ToggleButton";
import ScrollToTop from "../scrollToTop/ScrollToTop";

class BlockImage extends Component {
  state = {
    menuopen: false,
  };

  toggleMenu = () => {
    this.setState((prevState) => {
      return { menuOpen: !prevState.menuOpen };
    });
  };

  render() {
    const masonryOptions = {
      transitionDuration: 0,
      columnWidth: 480,
    };

    const screenWidth = window.screen.width;

    const collectionItems = this.props.photos.map((element) => (
      <Link
        key={element.id}
        className="blockItem"
        onClick={() => {
          this.props.imageClick(element.id, element.src);
        }}
        to={`/images/${element.id}`}
      >
        <img src={element.src} alt="" />
      </Link>
    ));

    const masonryElements =
      screenWidth > 451 ? (
        <Masonry
          elementType={"ul"}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
          enableResizableChildren
        >
          {collectionItems}
        </Masonry>
      ) : (
        collectionItems
      );

    return (
      <>
        <ScrollToTop />
        <BigFoto bcg={this.props.poster} name={this.props.name} />
        <div className="container-custom">
          <ToggleButton
            click={this.toggleMenu}
            show={this.state.menuOpen}
          ></ToggleButton>

          <div className="row">
            <Links show={this.state.menuOpen} />
          </div>
          <div className="block-masonry">{masonryElements}</div>
        </div>
      </>
    );
  }
}

export default BlockImage;
