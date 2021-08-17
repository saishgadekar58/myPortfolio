import React from "react";
import Particles from "react-particles-js";
import ParticleConfig from "./ParticleConfig";

export default function ParticleComponent({ children }) {
  return (
    <>
      <Particles params={ParticleConfig}>{children}</Particles>
    </>
  );
}
