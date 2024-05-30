import { useNavigate } from "react-router-dom";
import letters from "/images/letters_x.png";

export const About: React.FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    // PLAR Requirement 2.4.1 a)
    <section className="card mb-40 relative">
      <div className="z-10 h-128 px-5 bg-base-90 text-white text-left relative sm:h-144 sm:rounded-l-full sm:pl-20 sm:pl-28 sm:left-3 md:left-16 md:pr-36 xl:pr-112">
        <div className="sm:mt-10">
          <h1 className="text-md py-10 sm:pt-14 sm:pb-8">who we are</h1>
          <p className="text-xl sm:text-2xl xl:pr-44">
            Established in 1996, Studio X Design Inc. is a mother- daughter team
            with over 30 years of combined graphic design experience. Based in
            Calgary, we serve a diverse clientele, from established corporations
            to small businesses. Specializing in captivating branding solutions,
            we bring your vision to life with creativity, experience and
            excellence.
          </p>
          {/* PLAR Requirement 2.4.8 a) */}
          <div className="flex py-5 justify-center sm:py-10">
            <button
              className="btn btn-active btn-primary btn-md md:btn-lg"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </button>
          </div>
        </div>
        {/* 2.4.7 a.iii - CSS Positioning */}
        <div className="z-10 rounded-l-full h-144 overflow-hidden absolute right-0 top-0 hidden xl:block">
          <img src={letters} className="w-full h-full" />
        </div>
      </div>
      {/* 2.4.7 a.iii - CSS Positioning */}
      <div className="z-0  w-full min-h-128 overflow-hidden absolute -bottom-10 bg-hero-pattern sm:rounded-r-full sm:min-h-144 sm:-left-5 md:-left-48 md:-bottom-20"></div>
    </section>
  );
};
