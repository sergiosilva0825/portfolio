import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import clever from "../../Assets/Projects/clever.jpg";
import audible from "../../Assets/Projects/audible.jpg";
import tradecraft from "../../Assets/Projects/tradecraft.jpg";

import handphone from "../../Assets/Projects/handphone.jpg";
import consult from "../../Assets/Projects/consult.jpg";
import consulter from "../../Assets/Projects/consulter.jpg";
import obsidian from "../../Assets/Projects/obsidian.jpg";
import pointcore from "../../Assets/Projects/pointcore.jpg";


function Projects() {
  const imagePaths = [ clever, tradecraft, audible, handphone, consult, obsidian, pointcore]
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple"> Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          { imagePaths.map((imagePath, index)=>(
              <Col key={index} md={4} className="project-card">
                <ProjectCard
                  imgPath={imagePath}
                  // isBlog={false}
                  // title="Chatify"
                  // description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                  // ghLink="https://github.com/soumyajit4419/Chatify"
                  // demoLink="https://chatify-49.web.app/"
                />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
