import React from 'react';
import { Card, Col, Container, Row, Form, Button } from 'react-bootstrap';
import { Head } from '@inertiajs/react';
import { usePage, useForm } from '@inertiajs/react';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import Layout from '../../Layouts';

const EmailOTPConf = () => {
    const { settings } = usePage<any>().props;

    const { data, setData, post, processing, errors } = useForm<any>({
        email_smtp: settings.email_smtp || '',
        email_port: settings.email_port || '',
        email_username: settings.email_username || '',
        email_password: settings.email_password || '',
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
            <Head title='Email OTP Conf | Time to Pay' />
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Email OTP Configuration" pageTitle="Dashboard" />
                    <Row className="gy-4">
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <Row className="gy-4">
                                            <Col xxl={3} md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="email_smtp">SMTP Server</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="email_smtp"
                                                        value={data.email_smtp}
                                                        onChange={handleChange}
                                                        placeholder="SMTP Server"
                                                        isInvalid={!!errors.email_smtp}
                                                    />
                                                    {errors.email_smtp && <Form.Control.Feedback type="invalid">{errors.email_smtp}</Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col>
                                            <Col xxl={3} md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="email_port">SMTP Port</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="email_port"
                                                        value={data.email_port}
                                                        onChange={handleChange}
                                                        placeholder="SMTP Port"
                                                        isInvalid={!!errors.email_port}
                                                    />
                                                    {errors.email_port && <Form.Control.Feedback type="invalid">{errors.email_port}</Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col>
                                            <Col xxl={3} md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="email_username">SMTP Username</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="email_username"
                                                        value={data.email_username}
                                                        onChange={handleChange}
                                                        placeholder="SMTP Username"
                                                        isInvalid={!!errors.email_username}
                                                    />
                                                    {errors.email_username && <Form.Control.Feedback type="invalid">{errors.email_username}</Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col>
                                            <Col xxl={3} md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="email_password">SMTP Password</Form.Label>
                                                    <Form.Control
                                                        type="password"
                                                        id="email_password"
                                                        value={data.email_password}
                                                        onChange={handleChange}
                                                        placeholder="SMTP Password"
                                                        isInvalid={!!errors.email_password}
                                                    />
                                                    {errors.email_password && <Form.Control.Feedback type="invalid">{errors.email_password}</Form.Control.Feedback>}
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

EmailOTPConf.layout = (page: any) => <Layout children={page} />
export default EmailOTPConf;
