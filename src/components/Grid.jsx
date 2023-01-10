import React from "react";
import Card from "../commons/Card";

const Grid = ({ content, type }) => {
  return (
    <div>
      {content
        ? content.map((content) => (
            <div key={content.id}>
              <Card data={content} type={type} />
            </div>
          ))
        : ""}
    </div>
  );
};

export default Grid;
