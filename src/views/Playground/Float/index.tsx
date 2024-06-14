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
            As a project manager, I can say that one of Sandy’s key attributes
            is a willingness to be creative, fast and patient with complex
            approval processes. She has extensive experience with other orders
            of government and the private sector, enabling her to bring good
            counsel to the table when we do not always know with certainty how
            the finished product should look. And in my experience, she is not
            happy until we are happy, which can make all the difference.
          </p>
          <p className="text-md mt-2 italic lg:text-lg">
            – D. Holehouse Corporate Communications City of Edmonton
          </p>
        </div>
        <div className="my-5">
          <p className="text-lg lg:text-xl">
            We’ve worked with Studio X for several years on a variety of
            projects. We appreciate the quick turnaround and attention to all
            the details and parameters involved.
          </p>
          <p className="text-md mt-2 italic lg:text-lg">
            – Mike Steger Vice President, Marketing and Communications TELUS
            World of Science – Edmonton
          </p>
        </div>
      </div>
    </div>
  );
};
