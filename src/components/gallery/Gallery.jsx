import React from "react";
import "./Gallery.css";

const Gallery = props => {
  const galleryItems = props.elements.map(element => (
    <div className="galleryItem" key={element.id}>
      <img src={element.src} alt="" />
    </div>
  ));
  return (
    <>
      <h5 className="gallery-span disabled">2020</h5>
      <div className="gallery">{galleryItems}</div>
    </>
  );
};

export default Gallery;
