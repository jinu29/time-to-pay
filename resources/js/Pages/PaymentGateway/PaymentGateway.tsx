import React from 'react';
import { Card, Col, Container, Row, Form, Button } from 'react-bootstrap';
import { Head } from '@inertiajs/react';
import { usePage, useForm } from '@inertiajs/react';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import Layout from '../../Layouts';

const PaymentConf = () => {
    const { settings } = usePage().props;

    const { data, setData, post, processing, errors } = useForm({
        payment_gateway_title: settings.payment_gateway_title || 'RazorPay',
        api_key: settings.api_key || '',
        api_secret_key: settings.api_secret_key || '',
        mode: settings.mode || 'Live'
    });

    const handleChange = (e) => {
        setData(e.target.id, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('settings.update'), data);
    };

    return (
        <React.Fragment>
            <Head title='Payment Conf | Time to Pay' />
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Payment Conf" pageTitle="Dashboard" />
                    <Row className="gy-4">
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <Row className="gy-4">
                                            <Col xxl={3} md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="payment_gateway_title">Payment Gateway Title</Form.Label>
                                                    <Form.Control
                                                        as="select"
                                                        id="payment_gateway_title"
                                                        value={data.payment_gateway_title}
                                                        onChange={handleChange}
                                                        isInvalid={!!errors.payment_gateway_title}
                                                    >
                                                        <option value="RazorPay">RazorPay</option>
                                                        {/* <option value="PayPal">PayPal</option>
                                                        <option value="Stripe">Stripe</option> */}
                                                    </Form.Control>
                                                    {errors.payment_gateway_title && <Form.Control.Feedback type="invalid">{errors.payment_gateway_title}</Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col>
                                            <Col xxl={3} md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="mode">Mode</Form.Label>
                                                    <Form.Control
                                                        as="select"
                                                        id="mode"
                                                        value={data.mode}
                                                        onChange={handleChange}
                                                        isInvalid={!!errors.mode}
                                                    >
                                                        <option value="Live">Live</option>
                                                        <option value="Test">Test</option>
                                                    </Form.Control>
                                                    {errors.mode && <Form.Control.Feedback type="invalid">{errors.mode}</Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col>
                                            <Col xxl={3} md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="api_key">API Key</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="api_key"
                                                        value={data.api_key}
                                                        onChange={handleChange}
                                                        placeholder="API Key"
                                                        isInvalid={!!errors.api_key}
                                                    />
                                                    {errors.api_key && <Form.Control.Feedback type="invalid">{errors.api_key}</Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col>
                                            <Col xxl={3} md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="api_secret_key">API Secret Key</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="api_secret_key"
                                                        value={data.api_secret_key}
                                                        onChange={handleChange}
                                                        placeholder="API Secret Key"
                                                        isInvalid={!!errors.api_secret_key}
                                                    />
                                                    {errors.api_secret_key && <Form.Control.Feedback type="invalid">{errors.api_secret_key}</Form.Control.Feedback>}
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

PaymentConf.layout = (page) => <Layout children={page} />;
export default PaymentConf;
