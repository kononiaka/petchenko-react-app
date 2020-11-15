import React from "react";
import { Link } from "react-router-dom";
import "./Collection.css";
import CollectionBlock from "../CollectionBlock/CollectionBlock";

const Collection = (props) => {
  const collectionBlocks = props.blocks.map((block) => (
    <Link
      key={block.id}
      to={`collection/${block.id}`}
      onClick={() => {
        props.blockClick(block.id, block.src);
      }}
    >
      <CollectionBlock
        src={block.src}
        name={block.name}
        eventDate={block.eventDate}
        quantity={block.photos.length}
        status={block.status}
      />
    </Link>
  ));

  return (
    <div className="container-custom">
      <h2 className="collection-header">Collections</h2>
      {collectionBlocks}
    </div>
  );
};

export default Collection;
