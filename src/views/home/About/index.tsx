import { useNavigate } from "react-router-dom";
import letters from "/images/letters_x.png";

export const About: React.FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    // PLAR Requirement 2.4.1 a)
    <section className="card mb-40 relative">
      <div className="z-10 rounded-l-full min-h-128 pr-5 md:pr-36 xl:pr-104 pl-20 md:pl-28 bg-base-90 text-white text-left left-3 md:left-16 relative">
        <div className="mt-10">
          <h1 className="text-md pt-14 pb-8">who we are</h1>
          <p className="xl:pr-44 text-l md:text-2xl">
            Established in 1996, Studio X Design Inc. is a mother- daughter team
            with over 30 years of combined graphic design experience. Based in
            Calgary, we serve a diverse clientele, from established corporations
            to small businesses. Specializing in captivating branding solutions,
            we bring your vision to life with creativity, experience and
            excellence.
          </p>
          {/* PLAR Requirement 2.4.8 a) */}
          <div className="flex py-5 sm:py-10 justify-center	">
            <button
              className="btn btn-active btn-primary btn-md md:btn-lg"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </button>
          </div>
        </div>
        <div className="z-10 rounded-l-full max-w-128 overflow-hidden absolute right-0 top-0 hidden xl:block">
          <img src={letters} className="w-full" />
        </div>
      </div>
      <div className="z-0 rounded-r-full w-full min-h-128 overflow-hidden absolute -left-5 md:-left-48 -bottom-10 md:-bottom-20 bg-hero-pattern"></div>
    </section>
  );
};
