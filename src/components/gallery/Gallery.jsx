import React from "react";
import "./Gallery.css";
import Masonry from "react-masonry-component";
import { Link } from "react-router-dom";

const Gallery = (props) => {
  const masonryOptions = {
    transitionDuration: 0,
    columnWidth: 475,
  };

  const toggleImageClasses = `galleryItem${props.show ? " open" : ""}`;

  // const borderImageStyles = {
  //   border: "1px solid red",
  //   transform: "scale(1.5)",
  // };

  const galleryItems = props.elements.map((element) => (
    <Link
      key={element.id}
      className={toggleImageClasses}
      onClick={() => props.imageClick(element.id)}
      // style={element.id === props.openImageId ? borderImageStyles : {}}
      to="images/id"
    >
      <img src={element.src} alt="" />
    </Link>
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
