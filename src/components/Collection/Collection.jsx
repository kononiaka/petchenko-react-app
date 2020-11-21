import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Collection.css";
import CollectionBlock from "../CollectionBlock/CollectionBlock";
import Links from "../links/Links";
import ToggleButton from "../ToggleButton/ToggleButton";

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
        key={block.id}
        to={`collection/${block.id}`}
        onClick={() => {
          this.props.blockClick(block.id, block.src);
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
      <div className="container-custom">
        <div className="collection-button">
          <ToggleButton
            click={this.toggleMenu}
            show={this.state.menuOpen}
          ></ToggleButton>
          <div className="collection-stop"></div>
          {collectionBlocks}
        </div>

        <div className="row collection-links">
          <Links show={this.state.menuOpen} />
        </div>
        <h2 className="collection-header">Collections</h2>
      </div>
    );
  }
}
export default Collection;
