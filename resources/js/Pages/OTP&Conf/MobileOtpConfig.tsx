import React, { useState } from 'react';
import { Card, Col, Container, Row, Form, Button } from 'react-bootstrap';
import { Head } from '@inertiajs/react';
import { usePage, useForm } from '@inertiajs/react';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import Layout from '../../Layouts';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const MobileConf = () => {
    const { settings } = usePage().props;
    const { data, setData, post, processing, errors } = useForm({
        sms_gateway_url: settings.sms_gateway_url || '',
        sms_api_key: settings.sms_api_key || '',
        sms_sender_id: settings.sms_sender_id || '',
        sms_username: settings.sms_username || '',
        sms_password: settings.sms_password || '',
        encryption_type: settings.encryption_type || '', 
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setData(e.target.id, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('settings.MobileConfUpdate'), data);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <Head title='Mobile Configuration | Time to Pay' />
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Mobile Configuration" pageTitle="Dashboard" />
                    <Row className="gy-4">
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <Row className="gy-4">
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="sms_gateway_url">SMS Gateway URL</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="sms_gateway_url"
                                                        value={data.sms_gateway_url}
                                                        onChange={handleChange}
                                                        placeholder="SMS Gateway URL"
                                                        isInvalid={!!errors.sms_gateway_url}
                                                    />
                                                    {errors.sms_gateway_url && <Form.Control.Feedback type="invalid">{errors.sms_gateway_url}</Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="sms_api_key">SMS API Key</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="sms_api_key"
                                                        value={data.sms_api_key}
                                                        onChange={handleChange}
                                                        placeholder="SMS API Key"
                                                        isInvalid={!!errors.sms_api_key}
                                                    />
                                                    {errors.sms_api_key && <Form.Control.Feedback type="invalid">{errors.sms_api_key}</Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="sms_sender_id">SMS Sender ID</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="sms_sender_id"
                                                        value={data.sms_sender_id}
                                                        onChange={handleChange}
                                                        placeholder="SMS Sender ID"
                                                        isInvalid={!!errors.sms_sender_id}
                                                    />
                                                    {errors.sms_sender_id && <Form.Control.Feedback type="invalid">{errors.sms_sender_id}</Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="sms_username">SMS Username</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="sms_username"
                                                        value={data.sms_username}
                                                        onChange={handleChange}
                                                        placeholder="SMS Username"
                                                        isInvalid={!!errors.sms_username}
                                                    />
                                                    {errors.sms_username && <Form.Control.Feedback type="invalid">{errors.sms_username}</Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="sms_password">SMS Password</Form.Label>
                                                    <div className="input-group">
                                                        <Form.Control
                                                            type={showPassword ? 'text' : 'password'}
                                                            id="sms_password"
                                                            value={data.sms_password}
                                                            onChange={handleChange}
                                                            placeholder="SMS Password"
                                                            isInvalid={!!errors.sms_password}
                                                        />
                                                        <Button
                                                            variant="outline-secondary"
                                                            onClick={togglePasswordVisibility}
                                                            tabIndex="-1"
                                                        >
                                                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                                                        </Button>
                                                    </div>
                                                    {errors.sms_password && <Form.Control.Feedback type="invalid">{errors.sms_password}</Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="encryption_type">Encryption Type</Form.Label>
                                                    <Form.Control
                                                        as="select"
                                                        id="encryption_type"
                                                        value={data.encryption_type}
                                                        onChange={handleChange}
                                                        isInvalid={!!errors.encryption_type}
                                                    >
                                                        <option value="">Select Encryption Type</option>
                                                        <option value="ssl">SSL</option>
                                                        <option value="tls">TLS</option>
                                                    </Form.Control>
                                                    {errors.encryption_type && <Form.Control.Feedback type="invalid">{errors.encryption_type}</Form.Control.Feedback>}
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
        </>
    );
};

MobileConf.layout = (page) => <Layout children={page} />;

export default MobileConf;
