import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, Everyone.<br />
            I'm from Canaã dos Carajás, PARÁ.<br/>
            I like learning something new, and work well under-presure.<br/>
            Also, I enjoy thriveing on challenge.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
