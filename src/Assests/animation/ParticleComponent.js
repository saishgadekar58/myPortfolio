import React from "react";
import Particles from "react-particles-js";
import ParticleConfig from "./ParticleConfig";

export default function ParticleComponent() {
  return (
    <>
      <Particles params={ParticleConfig} className="defaultLines"></Particles>
    </>
  );
}
