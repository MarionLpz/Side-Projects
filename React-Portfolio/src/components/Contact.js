import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Col md={6}>
          <img src={contactImg} alt="Contact me">
            {" "}
          </img>
        </Col>
        <Col md={6}>
          <h2>Get in touch</h2>
          <form>
            <Row>
              <Col sm={6} className="px-1">
                <input
                  type="text"
                  value={formDetails.firstName}
                  placeholder="First Name"
                  onChange={(e) => onFormeUpdate("firstName", e.target.value)}
                />
              </Col>
              <Col sm={6} className="px-1">
                <input
                  type="text"
                  value={formDetails.lastName}
                  placeholder="Last Name"
                  onChange={(e) => onFormeUpdate("lastName", e.target.value)}
                />
              </Col>
              <Col sm={6} className="px-1">
                <input
                  type="email"
                  value={formDetails.email}
                  placeholder="Email"
                  onChange={(e) => onFormeUpdate("email", e.target.value)}
                />
              </Col>
              <Col sm={6} className="px-1">
                <input
                  type="tel"
                  value={formDetails.phone}
                  placeholder="Phone No."
                  onChange={(e) => onFormeUpdate("phone", e.target.value)}
                />
              </Col>
              <Col>
                <textarea
                  row="6"
                  value={formDetails.message}
                  placeholder="Message"
                  onChange={(e) => onFormeUpdate("message", e.target.value)}
                />
                <button type="submit">
                  <span>{buttonText}</span>
                </button>
              </Col>
              {status.message && (
                <Col>
                  <p
                    className={status.success === false ? "danger" : "success"}
                  >
                    {status.message}
                  </p>
                </Col>
              )}
            </Row>
          </form>
        </Col>
      </Container>
    </section>
  );
};
