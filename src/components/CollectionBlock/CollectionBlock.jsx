import React from "react";
import "./CollectionBlock.css";

const Block = (props) => {
  // const screenWidth = window.screen.width;

  // const styles =
  //   screenWidth < 451 && props.menuOpen
  //     ? "block-container hide"
  //     : "block-container";
  return (
    <>
      <img style={{ height: "430px" }} src={props.src} alt="src" />
      <h5 className="block-container_name">{props.name}</h5>
      <div className="block-details">
        <h6 className="inline">{props.eventDate}</h6>
        <h6 className="inline">{props.quantity} photos</h6>
        <h6 className="inline">{props.status}</h6>
      </div>
    </>
  );
};

export default Block;
