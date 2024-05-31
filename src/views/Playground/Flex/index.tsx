import React from "react";
import { galleryImages } from "../../Gallery/items";
import "./index.css";

export const Flex: React.FunctionComponent = () => {
  const content = galleryImages.slice(-7, -1);

  return (
    <div className="flex-container">
      {content?.map(({ src, alt }) => {
        return <img key={alt} src={src} width="100" height="100"></img>;
      })}
    </div>
  );
};
