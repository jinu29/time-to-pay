import React from 'react';
import { Card, Col, Container, Row, Form, Button } from 'react-bootstrap';
import { Head } from '@inertiajs/react';
import { usePage, useForm } from '@inertiajs/react';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import Layout from '../../Layouts';

const MobileOTPConf = () => {
    const { settings } = usePage<any>().props;

    const { data, setData, post, processing, errors } = useForm<any>({
        sms_gateway_url: settings.sms_gateway_url || '',
        sms_api_key: settings.sms_api_key || '',
        sms_sender_id: settings.sms_sender_id || '',
        sms_username: settings.sms_username || '',
        sms_password: settings.sms_password || '',
    });

    const handleChange = (e: any) => {
        setData(e.target.id as keyof any, e.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        post(route('settings.update'), data);
    };

    return (
        <React.Fragment>
            <Head title='Mobile OTP Conf | Time to Pay' />
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Mobile OTP Configuration" pageTitle="Dashboard" />
                    <Row className="gy-4">
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <Row className="gy-4">
                                            <Col xxl={3} md={6}>
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
                                            <Col xxl={3} md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="sms_api_key">API Key</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="sms_api_key"
                                                        value={data.sms_api_key}
                                                        onChange={handleChange}
                                                        placeholder="API Key"
                                                        isInvalid={!!errors.sms_api_key}
                                                    />
                                                    {errors.sms_api_key && <Form.Control.Feedback type="invalid">{errors.sms_api_key}</Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col>
                                            <Col xxl={3} md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="sms_sender_id">Sender ID</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="sms_sender_id"
                                                        value={data.sms_sender_id}
                                                        onChange={handleChange}
                                                        placeholder="Sender ID"
                                                        isInvalid={!!errors.sms_sender_id}
                                                    />
                                                    {errors.sms_sender_id && <Form.Control.Feedback type="invalid">{errors.sms_sender_id}</Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col>
                                            <Col xxl={3} md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="sms_username">Username</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="sms_username"
                                                        value={data.sms_username}
                                                        onChange={handleChange}
                                                        placeholder="Username"
                                                        isInvalid={!!errors.sms_username}
                                                    />
                                                    {errors.sms_username && <Form.Control.Feedback type="invalid">{errors.sms_username}</Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col>
                                            <Col xxl={3} md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="sms_password">Password</Form.Label>
                                                    <Form.Control
                                                        type="password"
                                                        id="sms_password"
                                                        value={data.sms_password}
                                                        onChange={handleChange}
                                                        placeholder="Password"
                                                        isInvalid={!!errors.sms_password}
                                                    />
                                                    {errors.sms_password && <Form.Control.Feedback type="invalid">{errors.sms_password}</Form.Control.Feedback>}
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

MobileOTPConf.layout = (page: any) => <Layout children={page} />
export default MobileOTPConf;
