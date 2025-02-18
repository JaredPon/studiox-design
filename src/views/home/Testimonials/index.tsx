import "./index.css";

export const Testimontials: React.FunctionComponent = () => {
  return (
    <section className="testimonials card relative">
      <div className="flex flex-col justify-center z-10 min-h-128 bg-base-90 text-white text-left relative md:rounded-r-full md:pl-20 md:right-20">
        <div className="px-6 my-5 md:px-44">
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
        <div className="px-6 my-5 md:px-44">
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
      <div className="z-0 w-full min-h-128 overflow-hidden absolute right-0 -top-11 bg-hero-pattern md:rounded-r-full md:right-14 md:-top-8 "></div>
    </section>
  );
};
