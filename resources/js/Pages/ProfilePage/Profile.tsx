import React, { useState } from "react";
import './Profile.scss';
import { Container, Row, Col } from "react-bootstrap";
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/react';

const Profile = () => {
    const { auth } = usePage().props;

    const [formData, setFormData] = useState({
        aadhar_number: '',
        pan_number: '',
        account_number: '',
        ifsc_code: ''
    });

    const [status, setStatus] = useState({
        aadhar: null,
        pan: null,
        account: null,
        ifsc: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Real-time validation
        if (name === 'aadhar_number') {
            setStatus({
                ...status,
                aadhar: value.length === 12 ? null : 'error'
            });
        }
        if (name === 'pan_number') {
            setStatus({
                ...status,
                pan: value.length === 10 ? null : 'error'
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const aadharValid = formData.aadhar_number.length === 12;
        const panValid = formData.pan_number.length === 10;

        if (!aadharValid || !panValid) {
            setStatus({
                aadhar: !aadharValid ? 'error' : null,
                pan: !panValid ? 'error' : null,
                account: formData.account_number ? null : 'error',
                ifsc: formData.ifsc_code ? null : 'error'
            });
            return;
        }

        Inertia.post('/profile', formData, {
            onError: (errors) => {
                setStatus({
                    aadhar: errors.aadhar_number ? 'error' : null,
                    pan: errors.pan_number ? 'error' : null,
                    account: errors.account_number ? 'error' : null,
                    ifsc: errors.ifsc_code ? 'error' : null,
                });
            },
            onSuccess: () => {
                setStatus({
                    aadhar: 'success',
                    pan: 'success',
                    account: 'success',
                    ifsc: 'success'
                });
            }
        });
    };

    return (
        <Container className="profile">
            <Row>
                <Col lg={5} md={12} sm={12} className="mt-3">
                    <div className="user-profile">
                        <h4>User Profile</h4>
                        <div className="user-image">
                        </div>
                        <h5>{auth.user.name}</h5>
                        <div className="profile-details">
                            <div>
                                <p className="mb-0">{auth.user.phone}</p>
                            </div>
                            <div>
                                <p className="mb-0">{auth.user.email}</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={7} md={12} sm={12} className="mt-3">
                    <div className="kyc-details">
                        <div className="kyc-title">
                            <h4 className="mb-0">Document Verification</h4>
                            <p className="mb-0">Fill all form fields to go to the next step</p>
                        </div>
                        <form className="form" onSubmit={handleSubmit}>
                            <Row className="form-details">
                                <Col lg={6} md={12} sm={12} className="mt-3">
                                    <div className="kyc-inputs">
                                        <input
                                            type="text"
                                            name="aadhar_number"
                                            placeholder="Enter Your Aadhar Number"
                                            className="input"
                                            value={formData.aadhar_number}
                                            onChange={handleChange}
                                            maxLength={12}
                                        />
                                        {status.aadhar === 'error' && <span className="error">Aadhar Number must be 12 digits</span>}
                                        {status.aadhar === 'success' && <span className="success">Aadhar verified successfully</span>}
                                    </div>
                                </Col>
                                <Col lg={6} md={12} sm={12} className="mt-3">
                                    <div className="kyc-inputs">
                                        <input
                                            type="text"
                                            name="pan_number"
                                            placeholder="Enter Your PAN Number"
                                            className="input"
                                            value={formData.pan_number}
                                            onChange={handleChange}
                                            maxLength={10}
                                            onKeyDown={(e) => {
                                                e.currentTarget.value = e.currentTarget.value.toUpperCase();
                                            }}
                                        />
                                        {status.pan === 'error' && <span className="error">PAN Number must be 10 characters</span>}
                                        {status.pan === 'success' && <span className="success">PAN verified successfully</span>}
                                    </div>
                                </Col>
                                <Col lg={6} md={12} sm={12} className="mt-3">
                                    <div className="kyc-inputs">
                                        <input
                                            type="text"
                                            name="account_number"
                                            placeholder="Enter Your Account Number"
                                            className="input"
                                            value={formData.account_number}
                                            onChange={handleChange}
                                        />
                                        {status.account === 'error' && <span className="error">Invalid Account Number</span>}
                                        {status.account === 'success' && <span className="success">Account verified successfully</span>}
                                    </div>
                                </Col>
                                <Col lg={6} md={12} sm={12} className="mt-3">
                                    <div className="kyc-inputs">
                                        <input
                                            type="text"
                                            name="ifsc_code"
                                            placeholder="Enter Your IFSC Code"
                                            className="input"
                                            value={formData.ifsc_code}
                                            onChange={handleChange}
                                        />
                                        {status.ifsc === 'error' && <span className="error">Invalid IFSC Code</span>}
                                        {status.ifsc === 'success' && <span className="success">IFSC Code verified successfully</span>}
                                    </div>
                                </Col>
                                <Col lg={12} className="mt-3">
                                    <button type="submit" className="verify">Verify</button>
                                </Col>
                            </Row>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Profile;
