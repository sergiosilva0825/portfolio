import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiRuby,
  DiMysql,
} from "react-icons/di";
import {
  SiRubyonrails,
  SiPostgresql,
  SiExpress,
  SiSequelize,
  SiKotlin,
} from "react-icons/si";

function Techstack() {

  const skills  = [
    <DiRuby/>,
    <DiJavascript1 />, 
    <DiPython />,
    <DiJava/>,
    <SiKotlin/>,
    <SiRubyonrails/>, 
    <DiNodejs />, 
    <DiReact />,
    <SiExpress />,
    <SiSequelize />,
    <DiMysql />,
    <DiMongodb />,
    <SiPostgresql />,
    <DiGit />,
  ]
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          {skill}
        </Col>
      ))
      }
    </Row>
  );
}

export default Techstack;
