import React from "react";
// import { Col, Row } from "react-bootstrap";

import skillItems from "./data/dataSkills";

export default function TechStack() {
  return (
    <div className="skills">
      {skillItems.map((skill) => {
        const { id, icon } = skill;
        return (
          <div className="row">
            <div key={id} className="tech-icons">
              {icon}
            </div>
          </div>
        );
      })}
    </div>
  );
}
