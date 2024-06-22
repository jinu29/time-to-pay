import React, { useState } from 'react';
import { Card, Col, Container, Row, Form, Button, Modal, Table } from 'react-bootstrap';
import { Head, useForm } from '@inertiajs/react';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import Layout from '../../Layouts';

const PaymentCreateShow = ({ settings }) => {
    const { data, setData, post, processing, errors } = useForm({
        bank_name: '',
        account_number: '',
        amount: '',
        Name: '',
        Email: '',
        phone_number: '',
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [generatedLink, setGeneratedLink] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        setData(e.target.id, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('settings.generatePaymentLinkUpdate'), {
            onSuccess: (response) => {
                const { message, paymentLink } = response;
                setSuccessMessage(message);
                setGeneratedLink(paymentLink);
                setShowModal(true);
            },
            onError: (error) => {
                setErrorMessage('Failed to generate payment link.');
                console.error(error);
            },
        });
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setGeneratedLink('');
    };

    return (
        <>
            <Head title="Enter Bank Details" />
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Bank Details" pageTitle="Enter Bank Details" />
                    <Row className="gy-4">
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <Row className="gy-4">
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="bank_name">Bank Name</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="bank_name"
                                                        value={data.bank_name}
                                                        onChange={handleChange}
                                                        placeholder="Enter Bank Name"
                                                        isInvalid={!!errors.bank_name}
                                                        required
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.bank_name}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="account_number">Account Number</Form.Label>
                                                    <Form.Control
                                                        type="number"
                                                        id="account_number"
                                                        value={data.account_number}
                                                        onChange={handleChange}
                                                        placeholder="Enter Account Number"
                                                        isInvalid={!!errors.account_number}
                                                        required
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.account_number}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="amount">Amount</Form.Label>
                                                    <Form.Control
                                                        type="number"
                                                        id="amount"
                                                        value={data.amount}
                                                        onChange={handleChange}
                                                        placeholder="Enter Amount"
                                                        isInvalid={!!errors.amount}
                                                        required
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.amount}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="Name">Name</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="Name"
                                                        value={data.Name}
                                                        onChange={handleChange}
                                                        placeholder="Enter Name"
                                                        isInvalid={!!errors.Name}
                                                        required
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.Name}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="Email">Email</Form.Label>
                                                    <Form.Control
                                                        type="email"
                                                        id="Email"
                                                        value={data.Email}
                                                        onChange={handleChange}
                                                        placeholder="Enter Email"
                                                        isInvalid={!!errors.Email}
                                                        required
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.Email}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="phone_number">Phone Number</Form.Label>
                                                    <Form.Control
                                                        type="number"
                                                        id="phone_number"
                                                        value={data.phone_number}
                                                        onChange={handleChange}
                                                        placeholder="Enter Phone Number"
                                                        isInvalid={!!errors.phone_number}
                                                        maxLength={10}
                                                        required
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.phone_number}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={12}>
                                                <Button className="btn btn-primary" type="submit" disabled={processing}>
                                                    {processing ? 'Processing...' : 'Generate Link'}
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                    <Row className="gy-4 mt-4">
                                        <Col>
                                            <Table striped bordered hover>
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Name</th>
                                                        <th>Email</th>
                                                        <th>Phone</th>
                                                        <th>Account</th>
                                                        <th>Payment Link</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>{data.id}</td>
                                                        <td>{data.Name}</td>
                                                        <td>{data.Email}</td>
                                                        <td>{data.phone_number}</td>
                                                        <td>{data.account_number}</td>
                                                        <td>{generatedLink}</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Generated Payment Link</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Time to pay: 15 minutes</p>
                    <p>Payment Link:</p>
                    <a href={generatedLink} target="_blank" rel="noopener noreferrer">{generatedLink}</a>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

PaymentCreateShow.layout = (page) => <Layout children={page} />;

export default PaymentCreateShow;
