import React from "react";
import "./Gallery.css";
import Masonry from "react-masonry-component";

const Gallery = (props) => {
  const galleryItems = props.elements.map((element) => (
    <Masonry>
      <div className="galleryItem" key={element.id}>
        <img src={element.src} alt="" />
      </div>
    </Masonry>
  ));
  return <div className="gallery">{galleryItems}</div>;
};

export default Gallery;
