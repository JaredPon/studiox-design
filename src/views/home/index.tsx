import { About } from "./About";
import { Clients } from "./Clients";
import { Testimontials } from "./Testimonials";
import { Works } from "./Works";

export const Home: React.FunctionComponent = () => {
  return (
    <>
      <About />
      <Works />
      <Testimontials />
      <Clients />
    </>
  );
};
