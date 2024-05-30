import React from "react";
import letters from "/images/letters_x.png";

import "./index.css";

export const Float: React.FunctionComponent = () => {
  return (
    <div className="float-container">
      {/* PLAR Requirement 2.4.2 h) - Transform */}
      <img
        src={letters}
        className="w-1/2 transform scale-90 float-image lg:w-1/4"
      />
      <div>
        <div className="my-5">
          <p className="text-lg lg:text-xl">
            Working with Studio X Design has been fantastic. They’ve done an
            incredible job designing logos and graphics for several of mine and
            my family’s businesses. They are flexible and is always able to work
            within my deadlines. I highly recommend the team at Studio X for
            anyone in need of top-quality design work!
          </p>
          <p className="text-md mt-2 italic lg:text-lg">
            – Janet Garvey, Hurricane Pipe & Supply LLC
          </p>
        </div>
        <div className="my-5">
          <p className="text-lg lg:text-xl">
            As an indigenous goods supplier, it’s important that we connect with
            indigenous artists for all facets of our brand. We are happy to be
            able to collaborate with Danielle, a local Métis graphic designer.
            She’s helped revitalize our brand’s visual identity, as well as help
            out with our sub-brands. We plan to work with her for many years to
            come!
          </p>
          <p className="text-md mt-2 italic lg:text-lg">
            – Martin Williams, Western Varieties Wholesale & Buffalo Cross
          </p>
        </div>
      </div>
    </div>
  );
};
