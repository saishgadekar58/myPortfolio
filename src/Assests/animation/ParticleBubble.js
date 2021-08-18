import React from "react";
import Particles from "react-particles-js";
import bubbleConfig from "./BubbleConfig";

export default function ParticleBubble({ children }) {
  return (
    <>
      <Particles className="bubble" params={bubbleConfig}>
        {children}
      </Particles>
      ;
    </>
  );
}
