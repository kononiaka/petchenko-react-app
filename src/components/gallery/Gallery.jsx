import React from "react";
import "./Gallery.css";

const Gallery = (props) => {
  const galleryItems = props.elements.map((element) => (
    <div className="galleryItem" key={element.id}>
      <img src={element.src} alt="" />
    </div>
  ));
  return (
    <>
      <div className="gallery">{galleryItems}</div>
    </>
  );
};

export default Gallery;
