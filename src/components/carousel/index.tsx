export interface Slide {
  alt: string;
  src: string;
}

type Props = { slides: Slide[] };

export const Carousel: React.FunctionComponent<Props> = ({ slides }) => {
  return (
    <div className="w-full carousel rounded-box border border-base-60">
      {slides?.map(({ src, alt }) => (
        <div className="carousel-item w-full" key={alt}>
          <img src={src} className="w-full" alt={alt} />
        </div>
      ))}
    </div>
  );
};
