import { useState } from "react";
import logo from "/images/logo.svg";

export const Header: React.FunctionComponent = () => {
  const [hidden, setHidden] = useState(true);

  function toggleHidden() {
    setHidden((prevState) => !prevState);
  }

  return (
    <header className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src={logo} className="w-64 sm:w-96" alt="StudioXDesign logo" />
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-base-90 border-base-90 hover:text-accent hover:border-accent"
          onClick={toggleHidden}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      {/* PLAR Requirement 2.4.7 b) */}
      <nav className="w-full block flex-grow lg:flex  lg:w-auto">
        <div
          className={`flex flex-col text-base-90 text-md lg:text-xl lg:text-right lg:flex-grow lg:justify-end lg:mr-8 lg:flex-row ${hidden ? "hidden lg:block" : ""}`}
        >
          <a
            href="/"
            className="block mt-4 border rounded p-2 border-base-70 lg:border-0 lg:inline-block lg:mt-0 text-base-90 mr-4"
          >
            Home
          </a>
          <a
            href="/contact"
            className="block mt-4 border rounded p-2 border-base-70 lg:border-0 lg:inline-block lg:mt-0 text-base-90 mr-4"
          >
            Contact
          </a>
          <a
            href="/gallery"
            className="block mt-4 border rounded p-2 border-base-70 lg:border-0 lg:inline-block lg:mt-0 text-base-90 mr-4"
          >
            Gallery
          </a>
          <a
            href="/crossreference"
            className="block mt-4 border rounded p-2 border-base-70 lg:border-0 lg:inline-block lg:mt-0 text-base-90 mr-4"
          >
            Cross Reference
          </a>
        </div>
      </nav>
    </header>
  );
};
