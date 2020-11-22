import React from "react";
import "./CollectionBlock.css";

const Block = (props) => {
  // console.log(props.name);
  // const screenWidth = window.screen.width;

  // const styles =
  //   screenWidth < 451 && props.menuOpen
  //     ? "block-container hide"
  //     : "block-container";
  return (
    <>
      <img src={props.src} alt="" />
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
