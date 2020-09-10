import React from "react";
import "./Gallery.css";
import Masonry from "react-masonry-component";

const Gallery = (props) => {
  const masonryOptions = {
    transitionDuration: 0,
    columnWidth: 475,
  };

  const galleryItems = props.elements.map((element) => (
    <li key={element.id} className="galleryItem">
      <img src={element.src} alt="" />
    </li>
  ));
  return (
    <Masonry
      elementType={"ul"}
      options={masonryOptions}
      disableImagesLoaded={false}
      updateOnEachImageLoad={false}
      enableResizableChildren
    >
      {galleryItems}
    </Masonry>
  );
};

export default Gallery;
