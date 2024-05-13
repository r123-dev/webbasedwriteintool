import React, { useState } from "react";
import { Button } from "antd";
import Block from "./Block";

const BlockList = () => {
  const [blocks, setBlocks] = useState([]);

  const addBlock = (type) => {
    const newBlock = { id: Date.now(), type };
    setBlocks([...blocks, newBlock]);
  };

  const deleteBlock = (id) => {
    setBlocks(blocks.filter((block) => block.id !== id));
  };

  const handleDragStart = (event, id) => {
    event.dataTransfer.setData("text/plain", id);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedBlockId = event.dataTransfer.getData("text/plain");
    const updatedBlocks = blocks.filter((block) => block.id.toString() !== droppedBlockId);
    const newIndex = event.target.dataset.index;
    const newBlock = blocks.find((block) => block.id.toString() === droppedBlockId);
    updatedBlocks.splice(newIndex, 0, newBlock);
    setBlocks(updatedBlocks);
  };

  return (
    <div>
      {blocks.map((block, index) => (
        <div
          key={block.id}
          data-index={index}
          draggable
          onDragStart={(e) => handleDragStart(e, block.id)}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <Block
            type={block.type}
            onDelete={() => deleteBlock(block.id)}
          />
        </div>
      ))}
      <Button className="add-btn" onClick={() => addBlock("text")}>
        Add Text Block
      </Button>
      <Button className="add-btn" onClick={() => addBlock("image")}>
        Add Image Block
      </Button>
    </div>
  );
};

export default BlockList;

