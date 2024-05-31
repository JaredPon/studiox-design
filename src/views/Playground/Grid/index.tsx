import React from "react";
// import Specialty from "../../../assets/works/specialty/specialty1.jpg";
import { eventImages } from "./items";

import "./index.css";

export const Grid: React.FunctionComponent = () => {
  return (
    <div className="grid-container">
      {eventImages?.map(({ src, alt }) => {
        return (
          <div className="flex justify-center m-6" key={alt}>
            {/* PLAR Requirement 2.4.2 h) - Rotate */}
            <img
              className="transform rotate-12"
              src={src}
              width="175"
              height="175"
            ></img>
          </div>
        );
      })}
    </div>
  );
};
