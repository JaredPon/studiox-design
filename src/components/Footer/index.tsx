import { useNavigate } from "react-router-dom";
import logo from "/images/logo_negative.svg";

export const Footer: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const lastModified = document.lastModified;

  return (
    <div className="bg-hero-pattern">
      <div className="flex-grow mx-5 md:mx-10 lg:mx-44 py-10">
        <div className="flex flex-col md:flex-row md:justify-between items-center text-sm text-base-90">
          <div className="order-2 md:order-1 mt-8 md:mt-0">
            <div className="text-left">
              <h1 className="mb-3"> Need a quote? </h1>
              <p className="text-2xl">
                Email Danielle at:{" "}
                <a
                  href="mailto:studioxdesign@shaw.ca"
                  className="font-extrabold"
                >
                  studioxdesign@shaw.ca
                </a>
              </p>
            </div>
            {/* PLAR Requirement 2.4.8 a) */}
            <div className="flex py-5 sm:py-10 justify-center	">
              <button
                className="btn btn-active btn-neutral btn-md md:btn-lg"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            {/* PLAR Requirement 2.4.1 b - static image */}
            <img src={logo} className="w-80" alt="StudioXDesign logo" />
          </div>
        </div>
      </div>
      {/* PLAR Requirement 2.4.1 e) */}
      <address>
        Written by <a href="mailto:jaredjpon@gmail.com">Jared Pon.</a> Last
        updated: {lastModified}
      </address>
    </div>
  );
};
