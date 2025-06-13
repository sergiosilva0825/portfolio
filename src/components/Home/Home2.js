import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I’ve been a Senior Ruby on Rails Engineer for over 8 years, building scalable and high-performance web apps. I’m passionate about writing clean, elegant code and using AWS for cloud infrastructure. <br/>I’ve worked with databases like MySQL, PostgreSQL, and MongoDB to make sure everything runs smoothly. On the frontend, I use React to build dynamic and user-friendly interfaces. <br/>I’m also great at balancing teams and making sure projects run efficiently with good collaboration. Over the years, I’ve mentored junior developers and always focused on delivering reliable, high-quality solutions.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sergiosilva0825@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiGmail/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/paulosilva-tt-145785369/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                |
              </li>
              <li className="social-icons">
                <FaPhone />
              </li>
              +55 94 991011814
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
