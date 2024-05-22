import "./Root.css";
import { About } from "./sections/about";
import { Clients } from "./sections/clients";
import { Testimontials } from "./sections/testimonials";
import { Works } from "./sections/works";

export const Root: React.FunctionComponent = () => {
  return (
    <>
      <About />
      <Works />
      <Testimontials />
      <Clients />
    </>
  );
};
