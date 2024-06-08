import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LogoLight from "../../../../images/logo-light.png";
import { Link } from "@inertiajs/react";
import Logo from '../../../../images/img/logo.png';

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="custom-footer bg-dark py-5 position-relative">
        <Container>
          <Row>
            <Col className="col-lg-4 mt-4">
              <div>
                <div>
                  <img src={Logo} style={{height:"150px", width:"250px"}} alt="logo light" height="17" />
                </div>
                <div className="mt-4 fs-13">
                  <p>
                  Welcome to Timetopay, your one-stop solution for hassle-free utility payments. Our platform simplifies the process of paying your bills, whether it's electricity, water, gas, or any other essential service. With our secure and convenient online portal, you can easily manage your payments, track your usage, and stay on top of your expenses. Say goodbye to long queues and late payments – join Timntopay today and experience the ease of managing your utilities from anywhere, at any time..
                  </p>
                  <ul className="list-inline mb-0 footer-social-link">
                    <li className="list-inline-item">
                      <Link href="#!" className="avatar-xs d-block">
                        <div className="avatar-title rounded-circle">
                          <i className="ri-facebook-fill"></i>
                        </div>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="#!" className="avatar-xs d-block">
                        <div className="avatar-title rounded-circle">
                          <i className="ri-github-fill"></i>
                        </div>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="#!" className="avatar-xs d-block">
                        <div className="avatar-title rounded-circle">
                          <i className="ri-linkedin-fill"></i>
                        </div>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="#!" className="avatar-xs d-block">
                        <div className="avatar-title rounded-circle">
                          <i className="ri-google-fill"></i>
                        </div>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="#!" className="avatar-xs d-block">
                        <div className="avatar-title rounded-circle">
                          <i className="ri-dribbble-line"></i>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col className="col-lg-7 ms-lg-auto">
              <Row>
                <Col className="col-sm-4 mt-4">
                  <h5 className="text-white mb-0">Company</h5>
                  <div className="text-muted mt-3">
                    <ul className="list-unstyled ff-secondary footer-list fs-16">
                      <li>
                        <Link href="/pages-profile">About Us</Link>
                      </li>
                      <li>
                        <Link href="/pages-gallery">Gallery</Link>
                      </li>
                      <li>
                        <Link href="/pages-team">Team</Link>
                      </li>
                      <li>
                        <Link href="/pages-pricing">Pricing</Link>
                      </li>
                      <li>
                        <Link href="/pages-timeline">Timeline</Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col className="col-sm-4 mt-4">
                  <h5 className="text-white mb-0">For Jobs</h5>
                  <div className="text-muted mt-3">
                    <ul className="list-unstyled ff-secondary footer-list fs-16">
                      <li>
                        <Link href="/apps-job-lists">Job List</Link>
                      </li>
                      <li>
                        <Link href="/apps-job-application">
                          application
                        </Link>
                      </li>
                      <li>
                        <Link href="/apps-job-new">New Job</Link>
                      </li>
                      <li>
                        <Link href="/apps-job-companies-lists">
                          Company List
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col className="col-sm-4 mt-4">
                  <h5 className="text-white mb-0">Support</h5>
                  <div className="text-muted mt-3">
                    <ul className="list-unstyled ff-secondary footer-list fs-16">
                      <li>
                        <Link href="/pages-faqs">FAQ</Link>
                      </li>
                      <li>
                        <Link href="/pages-faqs">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="text-center text-sm-start align-items-center mt-5">
            <Col className="col-sm-6">
              <div>
                <p className="copy-rights mb-0">
                  {new Date().getFullYear()} ©
                  Timetopay - CodeGen
                </p>
              </div>
            </Col>
            <Col className="col-sm-6">
              <div className="text-sm-end mt-3 mt-sm-0">
                <ul className="list-inline mb-0 footer-list gap-4 fs-15">
                  <li className="list-inline-item">
                    <Link href="/pages-privacy-policy">Privacy Policy</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="/pages-term-conditions">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="/pages-privacy-policy">Security</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
