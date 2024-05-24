export interface Image {
  alt: string;
  id: string;
  src: string;
}

type Props = { id: string; image?: Image };

export const Modal: React.FunctionComponent<Props> = ({ id, image }) => {
  return image ? (
    <dialog id={id} className="modal">
      <div className="modal-box bg-white p-7 w-full max-w-5xl lg:w-9/12 lg:p-10">
        <form method="dialog">
          <button className="btn btn-xs lg:btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <img
          className="h-auto max-w-full rounded-lg"
          src={image.src}
          alt={image.alt}
        />
      </div>
    </dialog>
  ) : null;
};
