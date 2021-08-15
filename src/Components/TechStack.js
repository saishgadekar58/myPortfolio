import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiHtml5,
  DiCss3,
  DiSass,
  DiJava,
} from "react-icons/di";
import {
  SiFirebase,
  SiJquery,
  SiBootstrap,
  SiRedux,
  SiMysql,
  SiHeroku,
  SiNetlify,
  SiPostman,
} from "react-icons/si";

export default function TechStack() {
  return (
    <div className="skills">
      <Row className="row" style={{ paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiHtml5 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiMongodb />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiCss3 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJquery />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiBootstrap />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiRedux />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMysql />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiSass />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiHeroku />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiNetlify />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostman />
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <DiJava />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiFirebase />
        </Col>
      </Row>
    </div>
  );
}
