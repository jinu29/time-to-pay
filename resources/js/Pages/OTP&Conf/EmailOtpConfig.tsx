import React, { useState } from 'react';
import { Card, Col, Container, Row, Form, Button } from 'react-bootstrap';
import { Head } from '@inertiajs/react';
import { usePage, useForm } from '@inertiajs/react';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import Layout from '../../Layouts';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 

const EmailConf = () => {
    const { settings } = usePage().props;
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    const { data, setData, post, processing, errors } = useForm({
        email_smtp: settings.email_smtp || '',
        email_port: settings.email_port || '',
        email_username: settings.email_username || '',
        email_password: settings.email_password || '',
        email_encryption: settings.email_encryption || '',
    });

    const handleChange = (e) => {
        setData(e.target.id, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('settings.EmailConfUpdate'), data);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <React.Fragment>
            <Head title='Email Conf | Time to Pay' />
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Email Configuration" pageTitle="Dashboard" />
                    <Row className="gy-4">
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <Row className="gy-4">
                                            <Col xxl={3} md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="email_smtp">Email SMTP</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="email_smtp"
                                                        value={data.email_smtp}
                                                        onChange={handleChange}
                                                        placeholder="Email SMTP"
                                                        isInvalid={!!errors.email_smtp}
                                                    />
                                                    {errors.email_smtp && <Form.Control.Feedback type="invalid">{errors.email_smtp}</Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col>
                                            <Col xxl={3} md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="email_port">Email Port</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="email_port"
                                                        value={data.email_port}
                                                        onChange={handleChange}
                                                        placeholder="Email Port"
                                                        isInvalid={!!errors.email_port}
                                                    />
                                                    {errors.email_port && <Form.Control.Feedback type="invalid">{errors.email_port}</Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col>
                                            <Col xxl={3} md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="email_username">Email Username</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="email_username"
                                                        value={data.email_username}
                                                        onChange={handleChange}
                                                        placeholder="Email Username"
                                                        isInvalid={!!errors.email_username}
                                                    />
                                                    {errors.email_username && <Form.Control.Feedback type="invalid">{errors.email_username}</Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col>
                                            <Col xxl={3} md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="email_password">Email Password</Form.Label>
                                                    <div className="input-group">
                                                        <Form.Control
                                                            type={showPassword ? "text" : "password"}
                                                            id="email_password"
                                                            value={data.email_password}
                                                            onChange={handleChange}
                                                            placeholder="Email Password"
                                                            isInvalid={!!errors.email_password}
                                                        />
                                                        <Button
                                                            variant="outline-secondary"
                                                            onClick={togglePasswordVisibility}
                                                            tabIndex="-1"
                                                        >
                                                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                                                        </Button>
                                                    </div>
                                                    {errors.email_password && <Form.Control.Feedback type="invalid">{errors.email_password}</Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col>
                                            <Col xxl={3} md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="email_encryption">Email Encryption</Form.Label>
                                                    <Form.Control
                                                        as="select"
                                                        id="email_encryption"
                                                        value={data.email_encryption}
                                                        onChange={handleChange}
                                                        isInvalid={!!errors.email_encryption}
                                                    >
                                                        <option value="">Select Encryption</option>
                                                        <option value="ssl">SSL</option>
                                                        <option value="tls">TLS</option>
                                                    </Form.Control>
                                                    {errors.email_encryption && <Form.Control.Feedback type="invalid">{errors.email_encryption}</Form.Control.Feedback>}
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

EmailConf.layout = (page) => <Layout children={page} />;
export default EmailConf;
