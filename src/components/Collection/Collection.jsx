import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Collection.css";
import CollectionBlock from "../CollectionBlock/CollectionBlock";
import Links from "../links/Links";
import ToggleButton from "../ToggleButton/ToggleButton";
import ScrollToTop from "../scrollToTop/ScrollToTop";

class Collection extends Component {
  state = {
    menuOpen: false,
  };
  toggleMenu = () => {
    this.setState((prevState) => {
      return { menuOpen: !prevState.menuOpen };
    });
  };

  render() {
    const collectionBlocks = this.props.blocks.map((block) => (
      <Link
        className="block-container"
        key={block.id}
        to={`collection/${block.id}`}
        onClick={() => {
          console.log(block.name);
          this.props.blockClick(block.id);
        }}
      >
        <CollectionBlock
          src={block.src}
          name={block.name}
          eventDate={block.eventDate}
          quantity={block.photos.length}
          status={block.status}
          menuOpen={this.state.menuOpen}
        />
      </Link>
    ));

    return (
      <>
        <ScrollToTop />
        <div className="container-custom">
          <h2 className="collection-header">Collections</h2>
          <div className="collection-button">
            <ToggleButton
              click={this.toggleMenu}
              show={this.state.menuOpen}
            ></ToggleButton>
            <div className="collection-stop"></div>
          </div>

          <div className="row collection-links">
            <Links show={this.state.menuOpen} />
          </div>
          <div className="collection-blocks">{collectionBlocks}</div>
        </div>
      </>
    );
  }
}
export default Collection;
