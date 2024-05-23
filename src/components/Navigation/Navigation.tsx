import logo from "/images/logo.svg";

export const Navigation: React.FunctionComponent = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src={logo} className="w-72 lg:w-96" alt="StudioXDesign logo" />
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="flex text-sm text-base-90 lg:text-xl lg:flex-grow lg:justify-end lg:mr-8">
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-base-90 mr-4"
          >
            Home
          </a>
          <a
            href="/contact"
            className="block mt-4 lg:inline-block lg:mt-0 mr-4"
          >
            Contact
          </a>
          <a
            href="/gallery"
            className="block mt-4 lg:inline-block lg:mt-0 mr-4"
          >
            Gallery
          </a>
          <a
            href="/crossreference"
            className="block mt-4 lg:inline-block lg:mt-0"
          >
            Cross Reference
          </a>
        </div>
      </div>
    </nav>
  );
};
