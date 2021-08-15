import React from "react";
import { Container, Row } from "react-bootstrap";
import { FaHandPointRight } from "react-icons/fa";
import aboutImg from "../images/about-img.png";
import TechStack from "./TechStack";

export default function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <section className="aboutSection">
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <div className="about">
              <div className="text-div">
                <h2>About Me</h2>
                <p>
                  Hi Everyone {""} , {""} I am <span> Saish Gadekar </span> from{" "}
                  <span> Nagpur </span>. {""} I am an Electronics Engineer and a
                  Web Developer
                </p>
                <p>
                  Apart from slapping my keyboard until everything works,some
                  other activities i love to do are
                </p>
                <ul>
                  <li>
                    {" "}
                    <FaHandPointRight id="hr" /> Playing VideoGames
                  </li>
                  <li>
                    {" "}
                    <FaHandPointRight id="hr" /> Watching Anime
                  </li>
                  <li>
                    <FaHandPointRight id="hr" /> Playing Chess
                  </li>
                </ul>
              </div>
              <div className="img-div">
                <img src={aboutImg} alt="aboutImg" />
              </div>
            </div>
          </Row>

          <h1 className="projectheading">
            My <strong className="purple">Skillset </strong>
          </h1>

          <TechStack />
        </section>
      </Container>
    </Container>
  );
}
