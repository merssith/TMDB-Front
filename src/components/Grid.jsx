import React from "react";
import Card from "../commons/Card";

const Grid = ({ content, type }) => {
  return (
    <div>
      {content
        ? content.map((content) => <Card data={content} type={type} />)
        : ""}
    </div>
  );
};

export default Grid;
