import React, { useState } from 'react';
import { Card, Col, Container, Row, Form, Button, Nav } from 'react-bootstrap';
import { Head } from '@inertiajs/react';
import { usePage, useForm } from '@inertiajs/react';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import Layout from '../../Layouts';

const OTPConf = () => {
    const { settings } = usePage<any>().props;
    const [isEmail, setIsEmail] = useState(true);
    const [showPassword, setShowPassword] = useState(false); 

    const { data, setData, post, processing, errors } = useForm<any>({
        email_smtp: settings.email_smtp || '',
        email_port: settings.email_port || '',
        email_username: settings.email_username || '',
        email_password: settings.email_password || '',
        sms_gateway_url: settings.sms_gateway_url || '',
        sms_api_key: settings.sms_api_key || '',
        sms_sender_id: settings.sms_sender_id || '',
        sms_username: settings.sms_username || '',
        sms_password: settings.sms_password || '',
        encryption: settings.encryption || '',
    });

    const handleChange = (e) => {
        setData(e.target.id, e.target.value);
    };


    const handleSubmit = (e: any) => {
        e.preventDefault();
        post(route('settings.update'), data);
    };

    const handleTypeChange = (isEmail: boolean) => {
        setIsEmail(isEmail);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <React.Fragment>
            <Head title={`${isEmail ? 'Email' : 'Mobile'} OTP Conf | Time to Pay`} />
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title={`${isEmail ? 'Email' : 'Mobile'} OTP Configuration`} pageTitle="Dashboard" />
                    <Row className="gy-4">
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Nav variant="tabs" activeKey={isEmail ? 'email' : 'mobile'} className="mb-4">
                                        <Nav.Item>
                                            <Nav.Link eventKey="email" onClick={() => handleTypeChange(true)}>
                                                Email OTP Configuration
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="mobile" onClick={() => handleTypeChange(false)}>
                                                Mobile OTP Configuration
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Form onSubmit={handleSubmit}>
                                        <Row className="gy-4">
                                            {isEmail ? (
                                                <>
                                                    <Col xxl={3} md={6}>
                                                        <Form.Group>
                                                            <Form.Label htmlFor="email_smtp">
                                                                SMTP Server <span style={{ color: 'red' }}>*</span>
                                                            </Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                id="email_smtp"
                                                                value={data.email_smtp}
                                                                onChange={handleChange}
                                                                placeholder="SMTP Server"
                                                                isInvalid={!!errors.email_smtp}
                                                                required
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.email_smtp}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xxl={3} md={6}>
                                                        <Form.Group>
                                                            <Form.Label htmlFor="email_port">
                                                                SMTP Port <span style={{ color: 'red' }}>*</span>
                                                            </Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                id="email_port"
                                                                value={data.email_port}
                                                                onChange={handleChange}
                                                                placeholder="SMTP Port"
                                                                isInvalid={!!errors.email_port}
                                                                required
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.email_port}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xxl={3} md={6}>
                                                        <Form.Group>
                                                            <Form.Label htmlFor="email_username">
                                                                SMTP Username <span style={{ color: 'red' }}>*</span>
                                                            </Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                id="email_username"
                                                                value={data.email_username}
                                                                onChange={handleChange}
                                                                placeholder="SMTP Username"
                                                                isInvalid={!!errors.email_username}
                                                                required
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.email_username}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xxl={3} md={6}>
                                                        <Form.Group>
                                                            <Form.Label htmlFor="email_password">
                                                                SMTP Password <span style={{ color: 'red' }}>*</span>
                                                            </Form.Label>
                                                            <div className="position-relative">
                                                                <Form.Control
                                                                    type={showPassword ? 'text' : 'password'}
                                                                    id="email_password"
                                                                    value={data.email_password}
                                                                    onChange={handleChange}
                                                                    placeholder="SMTP Password"
                                                                    isInvalid={!!errors.email_password}
                                                                    required
                                                                />
                                                                <i
                                                                    className={`bi bi-eye${showPassword ? '-slash' : ''} position-absolute top-50 end-0 translate-middle-y`}
                                                                    onClick={togglePasswordVisibility}
                                                                    style={{ cursor: 'pointer' }}
                                                                ></i>
                                                            </div>
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.email_password}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                </>
                                            ) : (
                                                <>
                                                    <Col xxl={3} md={6}>
                                                        <Form.Group>
                                                            <Form.Label htmlFor="sms_gateway_url">
                                                                SMS Gateway URL <span style={{ color: 'red' }}>*</span>
                                                            </Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                id="sms_gateway_url"
                                                                value={data.sms_gateway_url}
                                                                onChange={handleChange}
                                                                placeholder="SMS Gateway URL"
                                                                isInvalid={!!errors.sms_gateway_url}
                                                                required
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.sms_gateway_url}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xxl={3} md={6}>
                                                        <Form.Group>
                                                            <Form.Label htmlFor="sms_api_key">
                                                                API Key <span style={{ color: 'red' }}>*</span>
                                                            </Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                id="sms_api_key"
                                                                value={data.sms_api_key}
                                                                onChange={handleChange}
                                                                placeholder="API Key"
                                                                isInvalid={!!errors.sms_api_key}
                                                                required
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.sms_api_key}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xxl={3} md={6}>
                                                        <Form.Group>
                                                            <Form.Label htmlFor="sms_sender_id">
                                                                Sender ID <span style={{ color: 'red' }}>*</span>
                                                            </Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                id="sms_sender_id"
                                                                value={data.sms_sender_id}
                                                                onChange={handleChange}
                                                                placeholder="Sender ID"
                                                                isInvalid={!!errors.sms_sender_id}
                                                                required
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.sms_sender_id}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xxl={3} md={6}>
                                                        <Form.Group>
                                                            <Form.Label htmlFor="sms_username">
                                                                Username <span style={{ color: 'red' }}>*</span>
                                                            </Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                id="sms_username"
                                                                value={data.sms_username}
                                                                onChange={handleChange}
                                                                placeholder="Username"
                                                                isInvalid={!!errors.sms_username}
                                                                required
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.sms_username}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xxl={3} md={6}>
                                                        <Form.Group>
                                                            <Form.Label htmlFor="sms_password">
                                                                Password <span style={{ color: 'red' }}>*</span>
                                                            </Form.Label>
                                                            <div className="position-relative">
                                                                <Form.Control
                                                                    type={showPassword ? 'text' : 'password'}
                                                                    id="sms_password"
                                                                    value={data.sms_password}
                                                                    onChange={handleChange}
                                                                    placeholder="Password"
                                                                    isInvalid={!!errors.sms_password}
                                                                    required
                                                                />
                                                                <i
                                                                    className={`bi bi-eye${showPassword ? '-slash' : ''} position-absolute top-50 end-0 translate-middle-y`}
                                                                    onClick={togglePasswordVisibility}
                                                                    style={{ cursor: 'pointer' }}
                                                                ></i>
                                                            </div>
                                                            <Form.Control.Feedback type="invalid">
                                                                {errors.sms_password}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                </>
                                            )}
                                            <Col xxl={3} md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="encryption">
                                                        Encryption <span style={{ color: 'red' }}>*</span>
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="encryption"
                                                        value={data.encryption}
                                                        onChange={handleChange}
                                                        placeholder="Encryption"
                                                        isInvalid={!!errors.encryption}
                                                        required
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.encryption}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={12}>
                                                <Button className="btn btn-primary" type="submit" disabled={processing}>
                                                    {processing ? 'Updating...' : 'Update'}
                                                </Button>
                                            </Col> 
                                        </Row>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

OTPConf.layout = (page: any) => <Layout children={page} />;

export default OTPConf;
