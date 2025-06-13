import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiSublimetext,
  SiUbuntu,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    SiMacos,
    SiUbuntu,
    SiVisualstudiocode,
    SiPostman,
    SiSublimetext,
  ]
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      {tools.map((toolItem, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <toolItem />
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
