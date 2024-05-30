import React from "react";
import Specialty from "../../../assets/works/specialty/specialty1.jpg";

import "./index.css";

export const Grid: React.FunctionComponent = () => {
  // PLAR Requirement 2.4.2 h) - Rotate
  const img = (
    <img
      className="transform rotate-12 "
      src={Specialty}
      width="120"
      height="120"
    ></img>
  );
  const content = [];

  for (let i = 0; i < 6; i++) {
    content.push(
      <div className="flex justify-center m-6" key={i}>
        {img}
      </div>
    );
  }

  return <div className="grid-container">{content}</div>;
};
