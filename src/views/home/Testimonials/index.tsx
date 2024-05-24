export const Testimontials: React.FunctionComponent = () => {
  return (
    <section className="card relative">
      <div className="z-10 rounded-r-full min-h-128 md:pl-20 bg-base-90 text-white text-left right-3 md:right-20 relative">
        <div className="px-6 md:px-44 mt-10">
          <h1 className="pt-4 md:pt-14 pb-8">testimonials</h1>
          <p className="text-lg lg:text-xl">
            Sandy has been working with me for several years and has
            consistently produced materials that are creative, novel,
            professional and on-time. She regularly recommends improvements
            based on her perspective as a professional designer and the end
            products reflect her knack for catching small details and perfection
            in the end product. Those fine details are often what takes a
            project from being mediocre to being spectacular.
          </p>
          <p className="text-md mt-2 lg:text-lg">
            C. Strawson Director, Marketing & Communications University of
            Alberta
          </p>
        </div>
      </div>
      <div className="z-0 rounded-r-full w-full min-h-128 overflow-hidden absolute right-0 md:right-14 -top-11 md:-top-8 bg-hero-pattern"></div>
    </section>
  );
};
