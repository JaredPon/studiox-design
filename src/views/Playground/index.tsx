import React from "react";
import { Clock } from "../../components/Clock";
import { Confetti } from "./Confetti";
import { Grid } from "./Grid";
import { Flex } from "./Flex";
import { Float } from "./Float";
import { Party } from "./Party";

import "./index.css";

export const Playground: React.FunctionComponent = () => {
  return (
    <div className="playground bg-white">
      <Confetti></Confetti>
      <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
        Playground
      </h1>
      <section>
        <div className="birthday">
          <Party></Party>
          <p className="mb-1 text-xl font-extrabold text-green-600">Play me!</p>
        </div>
      </section>
      <section>
        <h3 className="mb-4 tracking-tight font-extrabold text-center text-gray-900">
          System Clock
        </h3>
        <Clock></Clock>
      </section>
      <section>
        <h3 className="mb-4 tracking-tight font-extrabold text-center text-gray-900">
          Grid Layout
        </h3>
        <Grid></Grid>
      </section>
      <section>
        <h3 className="mb-4 tracking-tight font-extrabold text-center text-gray-900">
          Flex Layout
        </h3>
        <Flex></Flex>
      </section>
      <section>
        <h3 className="mb-4 tracking-tight font-extrabold text-center text-gray-900">
          Float Layout
        </h3>
        <Float></Float>
      </section>
    </div>
  );
};
