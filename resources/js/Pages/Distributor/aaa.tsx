import React from 'react';
import { Card, Col, Container, Row, Form, Button } from 'react-bootstrap';
import { Head, usePage, useForm } from '@inertiajs/react'; // Ensure to import Inertia
import BreadCrumb from '../../Components/Common/BreadCrumb';
import Layout from '../../Layouts';

const DistributorList = () => {
    const { users = {} } = usePage().props; // Provide a default empty object

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        password: '',
        role: '',
    });

    const handleChange = (e) => {
        setData(e.target.id, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('user.DistributorListStore'), {
            onSuccess: () => reset(), // Reset the form on successful submission
        });
    };

    return (
        <React.Fragment>
            <Head title="Distributor | Time to Pay" />
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Distributor" pageTitle="Dashboard" />
                    <Row className="gy-4">
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <Row className="gy-4">
                                            <Col xs={12} md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="name">Name</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="name"
                                                        value={data.name}
                                                        onChange={handleChange}
                                                        placeholder="Name"
                                                        isInvalid={!!errors.name}
                                                    />
                                                    {errors.name && <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col>
                                            <Col xs={12} md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="email">Email</Form.Label>
                                                    <Form.Control
                                                        type="email"
                                                        id="email"
                                                        value={data.email}
                                                        onChange={handleChange}
                                                        placeholder="Email"
                                                        isInvalid={!!errors.email}
                                                    />
                                                    {errors.email && <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col>
                                            <Col xs={12} md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="phone">Phone Number</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="phone"
                                                        value={data.phone}
                                                        onChange={handleChange}
                                                        placeholder="Phone Number"
                                                        isInvalid={!!errors.phone}
                                                    />
                                                    {errors.phone && <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col>
                                            <Col xs={12} md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="password">Password</Form.Label>
                                                    <Form.Control
                                                        type="password"
                                                        id="password"
                                                        value={data.password}
                                                        onChange={handleChange}
                                                        placeholder="Password"
                                                        isInvalid={!!errors.password}
                                                    />
                                                    {errors.password && <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col>
                                            <Col xs={12} md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="role">Role</Form.Label>
                                                    <Form.Control
                                                        as="select"
                                                        id="role"
                                                        value={data.role}
                                                        onChange={handleChange}
                                                        isInvalid={!!errors.role}
                                                    >
                                                        <option value="">Select Role</option>
                                                        <option value="Distributor">Distributor</option>
                                                    </Form.Control>
                                                    {errors.role && <Form.Control.Feedback type="invalid">{errors.role}</Form.Control.Feedback>}
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

DistributorList.layout = (page) => <Layout children={page} />;
export default DistributorList;
