import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Carousel } from "../../../components/Carousel";
import branding1 from "../../../assets/works/branding/branding1.jpg";
import branding2 from "../../../assets/works/branding/branding2.jpg";
import logo1 from "../../../assets/works/logos/logo1.jpg";
import logo2 from "../../../assets/works/logos/logo2.jpg";
import logo3 from "../../../assets/works/logos/logo3.jpg";
import logo4 from "../../../assets/works/logos/logo4.jpg";
import logo5 from "../../../assets/works/logos/logo5.jpg";
import report1 from "../../../assets/works/reports/report1.jpg";
import report2 from "../../../assets/works/reports/report2.jpg";
import specialty1 from "../../../assets/works/specialty/specialty1.jpg";
import specialty2 from "../../../assets/works/specialty/specialty2.jpg";

import "./works.css";

enum WorkCategories {
  Logos = "logos",
  Reports = "reports",
  Branding = "branding",
  Specialty = "specialty",
}

export const Works: React.FunctionComponent = () => {
  const [category, setCategory] = useState(WorkCategories.Logos);
  const navigate = useNavigate();

  function selectCategory(category: WorkCategories) {
    setCategory(category);
  }

  const brandingSlides = [
    { src: branding1, alt: "branding1" },
    { src: branding2, alt: "branding2" },
  ];

  const logoSlides = [
    { src: logo1, alt: "logo1" },
    { src: logo2, alt: "logo2" },
    { src: logo3, alt: "logo3" },
    { src: logo4, alt: "logo4" },
    { src: logo5, alt: "logo5" },
  ];

  const reportSlides = [
    { src: report1, alt: "report1" },
    { src: report2, alt: "report2" },
  ];

  const specialtySlides = [
    { src: specialty1, alt: "specialty1" },
    { src: specialty2, alt: "specialty2" },
  ];

  return (
    <section className="card px-5 md:px-44">
      <h1 className="text-left">works</h1>
      <div className="mt-11 mb-7">
        {category === WorkCategories.Branding && (
          <Carousel slides={brandingSlides} />
        )}
        {category === WorkCategories.Logos && <Carousel slides={logoSlides} />}
        {category === WorkCategories.Reports && (
          <Carousel slides={reportSlides} />
        )}
        {category === WorkCategories.Specialty && (
          <Carousel slides={specialtySlides} />
        )}
      </div>

      <div className="flex flex-col items-center text-left md:text-center md:flex-row md:justify-center list-none row-auto categories text-2xl">
        <a
          className="pb-2 md:pb-0 md:mr-10"
          onClick={() => selectCategory(WorkCategories.Logos)}
        >
          logos
        </a>
        <a
          className="pb-2 md:pb-0 md:mr-10"
          onClick={() => selectCategory(WorkCategories.Reports)}
        >
          annual reports
        </a>
        <a
          className="pb-2 md:pb-0 md:mr-10"
          onClick={() => selectCategory(WorkCategories.Branding)}
        >
          branding
        </a>
        <a onClick={() => selectCategory(WorkCategories.Specialty)}>
          specialty
        </a>
      </div>

      {/* PLAR Requirement 2.4.8 a) */}
      <div className="pt-10">
        <button
          className="btn btn-active btn-primary btn-md lg:btn-lg"
          onClick={() => navigate("/studiox-design/gallery")}
        >
          See More
        </button>
      </div>
    </section>
  );
};
