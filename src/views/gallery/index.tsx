import branding1 from "../../assets/works/branding/branding1.jpg";
import branding2 from "../../assets/works/branding/branding2.jpg";
import logo1 from "../../assets/works/logos/logo1.jpg";
import logo2 from "../../assets/works/logos/logo2.jpg";
import logo3 from "../../assets/works/logos/logo3.jpg";
import logo4 from "../../assets/works/logos/logo4.jpg";
import logo5 from "../../assets/works/logos/logo5.jpg";
import report1 from "../../assets/works/reports/report1.jpg";
import report2 from "../../assets/works/reports/report2.jpg";
import specialty1 from "../../assets/works/specialty/specialty1.jpg";
import specialty2 from "../../assets/works/specialty/specialty2.jpg";

export const Gallery: React.FunctionComponent = () => {
  const galleryImages = [
    {
      src: branding1,
      alt: "",
    },
    {
      src: branding2,
      alt: "",
    },
    {
      src: logo1,
      alt: "",
    },
    {
      src: logo2,
      alt: "",
    },
    {
      src: logo3,
      alt: "",
    },
    {
      src: logo4,
      alt: "",
    },
    {
      src: logo5,
      alt: "",
    },
    {
      src: report1,
      alt: "",
    },
    {
      src: report2,
      alt: "",
    },
    {
      src: specialty1,
      alt: "",
    },
    {
      src: specialty2,
      alt: "",
    },
  ];

  return (
    <div className="mx-5 my-5">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages?.map(({ src, alt }) => {
          return (
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={src}
                alt={alt}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
