import React, { useState, useEffect } from "react";
import PartyHorn from "/sounds/party-horn.mp3";
import Play from "/images/play.svg";
import Pause from "/images/pause.svg";

import "./index.css";

export const Party: React.FunctionComponent = () => {
  /* PLAR Requirement 2.4.5 a) */
  const useAudio = (url: string) => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    /* PLAR Requirement 2.4.6 a) */
    useEffect(() => {
      playing ? audio.play() : audio.pause();
    }, [audio, playing]);

    useEffect(() => {
      audio.addEventListener("ended", () => setPlaying(false));
      return () => {
        audio.removeEventListener("ended", () => setPlaying(false));
      };
    }, []);

    return [playing, toggle];
  };

  const [playing, toggle] = useAudio(PartyHorn);

  return (
    <div className="party">
      <button onClick={toggle}>
        {playing ? (
          <img src={Pause} className="w-8" alt="Pause" />
        ) : (
          <img src={Play} className="w-8" alt="Play" />
        )}
      </button>
    </div>
  );
};
