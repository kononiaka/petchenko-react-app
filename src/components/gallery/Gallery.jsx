import React from "react";
import "./Gallery.css";
import Masonry from "react-masonry-component";
import { Link } from "react-router-dom";

const Gallery = (props) => {
  const masonryOptions = {
    transitionDuration: 0,
    columnWidth: 480,
  };

  const screenWidth = window.screen.width;

  const galleryItems = props.elements.map((element) => (
    <Link
      key={element.id}
      className="galleryItem"
      onClick={() => {
        props.imageClick(element.id, element.src);
      }}
      to={`images/${element.id}`}
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
        {galleryItems}
      </Masonry>
    ) : (
      galleryItems
    );

  return <>{masonryElements}</>;
};

export default Gallery;
