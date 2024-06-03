import React, { useState } from 'react';
import { Card, Col, Container, Row, Dropdown, Form, FloatingLabel, Button } from 'react-bootstrap';
import { Head } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import Layout from '../../Layouts';
import { usePage, useForm } from '@inertiajs/react';


const Eko = () => {

    const { settings } = usePage<any>().props;

    const { data, setData, post, processing, errors } = useForm<any>({
        prod_url: settings.prod_url || '',
        dev_key: settings.dev_key || '',
        secret_key: settings.secret_key || '',
        secret_key_timestamp: settings.secret_key_timestamp || '',
        initiator_id: settings.initiator_id || '',
        customer_id: settings.customer_id || '',
        authenticator_key: settings.authenticator_key || '',
        user_code: settings.user_code || '',
    });

    const handleChange = (e: any) => {
        console.log("jhi", e.target.id as keyof any, e.target.value)
        setData(e.target.id as keyof any, e.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        post(route('settings.update'), data);
    };

    return (
        <React.Fragment>
            <Head title='EKO |Time to Pay' />
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="EKO" pageTitle="Dashboard" />
                    <Row className="gy-4">
                        <Col>

                            <Row className="gy-4">
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            <Form onSubmit={handleSubmit}>
                                                <Row className="gy-4">
                                                    <Col xxl={3} md={6}>
                                                        <Form.Group>
                                                            <Form.Label htmlFor="prod_url">Prod URL</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                id="prod_url"
                                                                value={data.prod_url}
                                                                onChange={handleChange}
                                                                placeholder="Prod URL"
                                                                isInvalid={!!errors.prod_url}
                                                            />
                                                            {errors.prod_url && <Form.Control.Feedback type="invalid">{errors.prod_url}</Form.Control.Feedback>}
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xxl={3} md={6}>
                                                        <Form.Group>
                                                            <Form.Label htmlFor="dev_key">Developer Key</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                id="dev_key"
                                                                value={data.dev_key}
                                                                onChange={handleChange}
                                                                placeholder="Developer Key"
                                                                isInvalid={!!errors.dev_key}
                                                            />
                                                            {errors.dev_key && <Form.Control.Feedback type="invalid">{errors.dev_key}</Form.Control.Feedback>}
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xxl={3} md={6}>
                                                        <Form.Group>
                                                            <Form.Label htmlFor="secret_key">Secret Key</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                id="secret_key"
                                                                value={data.secret_key}
                                                                onChange={handleChange}
                                                                placeholder="Secret Key"
                                                                isInvalid={!!errors.secret_key}
                                                            />
                                                            {errors.secret_key && <Form.Control.Feedback type="invalid">{errors.secret_key}</Form.Control.Feedback>}
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xxl={3} md={6}>
                                                        <Form.Group>
                                                            <Form.Label htmlFor="secret_key_timestamp">Secret Key Timestamp</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                id="secret_key_timestamp"
                                                                value={data.secret_key_timestamp}
                                                                onChange={handleChange}
                                                                placeholder="Secret Key Timestamp"
                                                                isInvalid={!!errors.secret_key_timestamp}
                                                            />
                                                            {errors.secret_key_timestamp && <Form.Control.Feedback type="invalid">{errors.secret_key_timestamp}</Form.Control.Feedback>}
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xxl={3} md={6}>
                                                        <Form.Group>
                                                            <Form.Label htmlFor="initiator_id">Initiator ID</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                id="initiator_id"
                                                                value={data.initiator_id}
                                                                onChange={handleChange}
                                                                placeholder="Initiator ID"
                                                                isInvalid={!!errors.initiator_id}
                                                            />
                                                            {errors.initiator_id && <Form.Control.Feedback type="invalid">{errors.initiator_id}</Form.Control.Feedback>}
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xxl={3} md={6}>
                                                        <Form.Group>
                                                            <Form.Label htmlFor="customer_id">Customer ID</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                id="customer_id"
                                                                value={data.customer_id}
                                                                onChange={handleChange}
                                                                placeholder="Customer ID"
                                                                isInvalid={!!errors.customer_id}
                                                            />
                                                            {errors.customer_id && <Form.Control.Feedback type="invalid">{errors.customer_id}</Form.Control.Feedback>}
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xxl={3} md={6}>
                                                        <Form.Group>
                                                            <Form.Label htmlFor="authenticator_key">Authenticator Key</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                id="authenticator_key"
                                                                value={data.authenticator_key}
                                                                onChange={handleChange}
                                                                placeholder="Authenticator Key"
                                                                isInvalid={!!errors.authenticator_key}
                                                            />
                                                            {errors.authenticator_key && <Form.Control.Feedback type="invalid">{errors.authenticator_key}</Form.Control.Feedback>}
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xxl={3} md={6}>
                                                        <Form.Group>
                                                            <Form.Label htmlFor="user_code">User Code</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                id="user_code"
                                                                value={data.user_code}
                                                                onChange={handleChange}
                                                                placeholder="User Code"
                                                                isInvalid={!!errors.user_code}
                                                            />
                                                            {errors.user_code && <Form.Control.Feedback type="invalid">{errors.user_code}</Form.Control.Feedback>}
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

                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};
Eko.layout = (page: any) => <Layout children={page} />
export default Eko;