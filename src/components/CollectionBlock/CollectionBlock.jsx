import React from "react";
import "./CollectionBlock.css";

const Block = (props) => {
  const screenWidth = window.screen.width;

  const styles =
    screenWidth < 451 && props.menuOpen
      ? "block-container hide"
      : "block-container";
  return (
    <div className={styles}>
      <img src={props.src} alt="" />
      <h5 className="blockContainer_name">{props.name}</h5>
      <div className="block-details">
        <h6 className="inline">{props.eventDate}</h6>
        <h6 className="inline">{props.quantity} photos</h6>
        <h6 className="inline">{props.status}</h6>
      </div>
    </div>
  );
};

export default Block;
