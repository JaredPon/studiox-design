import { useState } from "react";
import { galleryImages } from "./items";
import { Modal } from "../../components/Modal";
import { Image } from "../../components/Modal";

export const Gallery: React.FunctionComponent = () => {
  const [image, setImage] = useState<Image>();

  function handleClick(image: Image) {
    setImage(image);
    document.getElementById("imageView")?.showModal();
  }

  return (
    <div className="mx-5 my-5">
      <Modal id="imageView" image={image}></Modal>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages?.map(({ src, alt }) => {
          return (
            <div key={src} onClick={() => handleClick({ src, alt, id: alt })}>
              {/* PLAR Requirement 2.4.1 b - clickable image */}
              {/* PLAR Requirement 2.4.7 c) */}
              <img
                className="h-auto max-w-full rounded-lg"
                src={src}
                alt={alt}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
