export interface Slide {
  alt: string;
  src: string;
}

type Props = { slides: Slide[] };

export const Carousel: React.FunctionComponent<Props> = ({ slides }) => {
  return (
    // PLAR Requirement 2.4.2 h) - Box Shadow
    <div className="w-full carousel rounded-box border border-base-60 shadow-md">
      {slides?.map(({ src, alt }) => (
        <div className="carousel-item w-full" key={alt}>
          <img src={src} className="w-full" alt={alt} />
        </div>
      ))}
    </div>
  );
};
