import logo from "/images/logo_negative.svg";

export const Footer: React.FunctionComponent = () => {
  return (
    <div className="bg-hero-pattern">
      <div className="flex-grow mx-5 md:mx-10 lg:mx-44 py-10">
        <div className="flex flex-col md:flex-row md:justify-between items-center text-sm text-base-90">
          <div className="order-2 md:order-1 mt-8 md:mt-0">
            <div className="text-left">
              <h1 className="mb-3"> Need a quote? </h1>
              <p className="text-2xl">
                Email Danielle at:{" "}
                <span className="font-extrabold">studioxdesign@shaw.ca</span>
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img src={logo} className="w-80" alt="StudioXDesign logo" />
          </div>
        </div>
      </div>
    </div>
  );
};
