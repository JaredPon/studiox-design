import React, { useState, useEffect } from "react";

type Props = { endDate: Date };

export const Clock: React.FunctionComponent<Props> = ({ endDate }) => {
  const [time, setTime] = useState<string>();

  useEffect(() => {
    setInterval(() => {
      const SECOND = 1000;
      const MINUTE = SECOND * 60;
      const HOUR = MINUTE * 60;
      const DAY = HOUR * 24;

      // PLAR Requirement 2.4.6 b)
      const dateNow = new Date();
      const distance = endDate.getTime() - dateNow.getTime();

      const days = Math.floor(distance / DAY);
      const hours = Math.floor((distance % DAY) / HOUR);
      const minutes = Math.floor((distance % HOUR) / MINUTE);
      const seconds = Math.floor((distance % MINUTE) / SECOND);

      const time =
        days +
        " Days : " +
        hours +
        " Hours : " +
        minutes +
        " Minutes : " +
        seconds +
        " Seconds";

      setTime(time);
    }, 1000);
  }, [endDate]);

  return <div>{time}</div>;
};
