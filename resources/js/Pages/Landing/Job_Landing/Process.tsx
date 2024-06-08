import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { jobProcess } from "../../../common/data/jobLanding";

const Process = () => {
  return (
    <React.Fragment>
      <section className="section" id="process">
        <Container>
          <Row className="">
            <Col lg={8}>
              <div className="mb-5">
                <h1 className="mb-3 ff-secondary fw-semibold lh-base">
                  Our Features
                </h1>
                <p className="text-muted">
                  With our user-friendly interface, you can initiate a transfer in just a few clicks. Our system uses the latest encryption technology to ensure your personal and financial information is kept safe and secure. Plus, our competitive exchange rates mean you get the most for your money.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {jobProcess.map((item, key) => (
              <Col lg={4} md={6} key={key}>
                <Card className={key === 0 ? "card shadow-lg" : "card shadow-none card-border-effect-none border-0"}>
                  <Card.Body className="p-4">
                  <h1 className={`fw-bold display-5 ff-secondary mb-4 text-${item.text} position-relative`}>
                      <div className="job-icon-effect"></div>
                      <span>{item.id}</span>
                    </h1>
                    <h6 className="fs-17 mb-2">{item.lable}</h6>
                    <p className="text-muted mb-0 fs-15">{item.desc}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Process;
