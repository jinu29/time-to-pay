import React from "react";
import './Profile.scss';
import { Container, Row, Col } from "react-bootstrap";


const Profile = () => {
    return (
        <React.Fragment>
            <Container className="profile">
                <Row>
                    <Col lg={5} md={12} sm={12} className="mt-3">
                        <div className="user-profile">
                            <h4>User Profile</h4>
                            <div className="user-image">
                            </div>
                            <h5>Kiruthika</h5>
                            <div className="profile-details">
                                <div>
                                    <p className="mb-0">9994659876</p>
                                </div>
                                <div>
                                    <p className="mb-0">user@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={7} md={12} sm={12} className="mt-3">
                        <div className="kyc-details">
                            <div className="kyc-title">
                                <h4 className="mb-0">Document Verification</h4>
                                <p className="mb-0">Fill all form field to go to next step</p>
                            </div>
                            <form className="form">
                                <Row className="form-details">
                                    <Col lg={6} md={12} sm={12} className="mt-3">
                                        <div className="kyc-inputs">
                                            <input type="number" placeholder="Enter Your Aadhar Number" className="input"/>
                                            <span className="error">Entered Number is wrong</span>
                                            <span className="success">Verified successfully</span>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={12} sm={12} className="mt-3"> 
                                        <div className="kyc-inputs"> 
                                            <input type="number" placeholder="Enter Your PAN Number" className="input"/>
                                            <span className="error">Entered Number is wrong</span>
                                            <span className="success">Verified successfully</span>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={12} sm={12} className="mt-3"> 
                                        <div className="kyc-inputs"> 
                                            <input type="number" placeholder="Enter Your Account Number" className="input"/>
                                            <span className="error">Entered Number is wrong</span>
                                            <span className="success">Verified successfully</span>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={12} sm={12} className="mt-3"> 
                                        <div className="kyc-inputs"> 
                                            <input type="number" placeholder="Enter Your IFSC Code" className="input"/>
                                            <span className="error">Entered Number is wrong</span>
                                            <span className="success">Verified successfully</span>
                                        </div>
                                    </Col>
                                    <button type="submit" className="verify">Verify</button>
                                </Row>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Profile;