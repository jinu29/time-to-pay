import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Row, Form, Button } from 'react-bootstrap';
import { Head, usePage, useForm } from '@inertiajs/react'; 
import BreadCrumb from '../../Components/Common/BreadCrumb';
import Layout from '../../Layouts';

const UserKYCRegister = () => {
    const { users = [] } = usePage().props; 

    const { data, setData, post, processing, errors, reset } = useForm({
        userId: '',
        panCard: '', 
        aadhaarCard: '', 
        bankAccountNo: '',
        ifscCode: '',
    });

    useEffect(() => {
        setData({
            userId: data.userId,
            panCard: data.panCard,
            aadhaarCard: data.aadhaarCard,
            bankAccountNo: data.bankAccountNo,
            ifscCode: data.ifscCode,
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

    return (
        <React.Fragment>
            <Head title="KYC Register | Time to Pay" />
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="User KYC Register" pageTitle="Dashboard" />
                    <Row className="gy-4">
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <Row className="gy-4">
                                            <Col xs={12} md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="userId">User ID</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="userId"
                                                        value={data.userId}
                                                        onChange={handleChange}
                                                        placeholder="User ID"
                                                        isInvalid={!!errors.userId}
                                                    />
                                                    {errors.userId && <Form.Control.Feedback type="invalid">{errors.userId}</Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col>
                                            <Col xs={12} md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="panCard">Pan Card</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="panCard"
                                                        value={data.panCard}
                                                        onChange={handleChange}
                                                        placeholder="Pan Card Number"
                                                        isInvalid={!!errors.panCard}
                                                    />
                                                    {errors.panCard && <Form.Control.Feedback type="invalid">{errors.panCard}</Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col>
                                            <Col xs={12} md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="aadhaarCard">Aadhaar Card</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="aadhaarCard"
                                                        value={data.aadhaarCard}
                                                        onChange={handleChange}
                                                        placeholder="Aadhaar Card Number"
                                                        isInvalid={!!errors.aadhaarCard}
                                                    />
                                                    {errors.aadhaarCard && <Form.Control.Feedback type="invalid">{errors.aadhaarCard}</Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col>
                                            <Col xs={12} md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="bankAccountNo">Bank Account Number</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="bankAccountNo"
                                                        value={data.bankAccountNo}
                                                        onChange={handleChange}
                                                        placeholder="Bank Account Number"
                                                        isInvalid={!!errors.bankAccountNo}
                                                    />
                                                    {errors.bankAccountNo && <Form.Control.Feedback type="invalid">{errors.bankAccountNo}</Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col>
                                            <Col xs={12} md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="ifscCode">IFSC Code</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="ifscCode"
                                                        value={data.ifscCode}
                                                        onChange={handleChange}
                                                        placeholder="IFSC Code"
                                                        isInvalid={!!errors.ifscCode}
                                                    />
                                                    {errors.ifscCode && <Form.Control.Feedback type="invalid">{errors.ifscCode}</Form.Control.Feedback>}
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

UserKYCRegister.layout = (page) => <Layout children={page} />;
export default UserKYCRegister;
