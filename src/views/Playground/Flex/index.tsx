import React from "react";
import Specialty from "../../../assets/works/specialty/specialty1.jpg";

import "./index.css";

export const Flex: React.FunctionComponent = () => {
  const img = <img src={Specialty} width="100" height="100"></img>;
  const content = [];

  for (let i = 0; i < 6; i++) {
    content.push(
      <div key={i} className="flex-item">
        {img}
      </div>
    );
  }

  return <div className="flex-container">{content}</div>;
};
