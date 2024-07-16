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
        Events
      </h1>
      <section>
        <div className="birthday">
          <Party></Party>
          <p className="mb-1 text-3xl font-extrabold">
            Join us for a gathering at our location on 2024-12-05
          </p>
          <div className="my-6 text-4xl font-extrabold">
            <Clock endDate={new Date("2024-12-05")}></Clock>
          </div>
        </div>
      </section>
      <section>
        <h3 className="mb-4 tracking-tight font-extrabold text-center text-gray-900">
          Meet our community!
        </h3>
        <Grid></Grid>
      </section>
      <section>
        <h3 className="mb-4 tracking-tight font-extrabold text-center text-gray-900">
          See our products!
        </h3>
        <Flex></Flex>
      </section>
      <section>
        <h3 className="mb-4 tracking-tight font-extrabold text-center text-gray-900">
          Hear from our customers!
        </h3>
        <Float></Float>
      </section>
    </div>
  );
};
