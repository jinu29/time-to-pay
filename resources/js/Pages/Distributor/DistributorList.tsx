import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Row, Form, Button, Table } from 'react-bootstrap';
import { Head, usePage, useForm } from '@inertiajs/react'; 
import BreadCrumb from '../../Components/Common/BreadCrumb';
import Layout from '../../Layouts';
import { FaEdit, FaTrash, FaEye, FaEyeSlash } from 'react-icons/fa';

const DistributorList = () => {
    const { users = [] } = usePage().props; 

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        password: '',
        role: '',
    });

    useEffect(() => {
        setData({
            name: data.name,
            email: data.email,
            phone: data.phone,
            password: data.password,
            role: data.role,
        });
    }, [data]);

    const handleChange = (e) => {
        setData(e.target.id, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('user.DistributorListStore'), {
            onSuccess: () => reset(),
        });
    };

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Filter users to show only distributors
    const distributorUsers = users.filter(user => user.role === 'Distributor');

    // Function to handle edit action
    const handleEdit = (userId) => {
        const selectedUser = distributorUsers.find(user => user.id === userId);
        if (selectedUser) {
            setData({
                name: selectedUser.name,
                email: selectedUser.email,
                phone: selectedUser.phone,
                role: selectedUser.role,
                password: '', 
            });
        }
    };

    // Function to handle delete action
    const handleDelete = (userId) => {
        // Implement delete functionality here, e.g., show confirmation modal
        console.log(`Deleting user with ID: ${userId}`);
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
                                                    <div className="input-group">
                                                        <Form.Control
                                                            type={showPassword ? 'text' : 'password'}
                                                            id="password"
                                                            value={data.password}
                                                            onChange={handleChange}
                                                            placeholder="Password"
                                                            isInvalid={!!errors.password}
                                                        />
                                                        <Button variant="outline-secondary" onClick={togglePasswordVisibility}>
                                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                        </Button>
                                                    </div>
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
                                                        <option value="distributor">Distributor</option>
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
                    <Row className="gy-4">
                        <Col>
                            <Card>
                                <Card.Body>
                                    <h5 className="card-title">Distributor List</h5>
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Phone Number</th>
                                                <th>Role</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {distributorUsers.length > 0 ? (
                                                distributorUsers.map((user, index) => (
                                                    <tr key={index}>
                                                        <td>{user.id}</td>
                                                        <td>{user.name}</td>
                                                        <td>{user.email}</td>
                                                        <td>{user.phone}</td>
                                                        <td>{user.role}</td>
                                                        <td>
                                                            <Button variant="outline-primary" size="sm" onClick={() => handleEdit(user.id)}>
                                                                <FaEdit /> Edit
                                                            </Button>{' '}
                                                            <Button variant="outline-danger" size="sm" onClick={() => handleDelete(user.id)}>
                                                                <FaTrash /> Delete
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="6" className="text-center">No distributors found</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </Table>
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
