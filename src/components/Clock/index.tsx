import React, { useState, useEffect } from "react";

export const Clock: React.FunctionComponent = () => {
  const [time, setTime] = useState<string>();

  useEffect(() => {
    setInterval(() => {
      // PLAR Requirement 2.4.6 b)
      const date = new Date();
      const time =
        date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();

      setTime(time);
    }, 1000);
  }, []);

  return <div>{time}</div>;
};
