import React from "react";
import BigFoto from "../BigFoto/BigFoto";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-component";
import "./BlockImage.css";

const BlockImage = (props) => {
  const masonryOptions = {
    transitionDuration: 0,
    columnWidth: 480,
  };

  const collectionItems = props.photos.map((element) => (
    <Link
      key={element.id}
      className="blockItem"
      onClick={() => {
        props.imageClick(element.id, element.src);
      }}
      to={`/images/${element.id}`}
    >
      <img src={element.src} alt="" />
    </Link>
  ));
  return (
    <>
      <BigFoto bcg={props.poster} />
      <Masonry
        elementType={"ul"}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
        enableResizableChildren
      >
        {collectionItems}
      </Masonry>
      );
    </>
  );
};

export default BlockImage;
