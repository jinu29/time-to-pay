import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Row, Form, Button, Modal, Table } from 'react-bootstrap';
import { Head, useForm } from '@inertiajs/react';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import Layout from '../../Layouts';

const PaymentCreateShow = ({ PaymentLinkGeneration }) => {
    const { data, setData, post, processing, errors } = useForm({
        amount: '',
        Name: '',
        Email: '',
        phone_number: '',
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [generatedLink, setGeneratedLink] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [paymentLinks, setPaymentLinks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPaymentLinks();
    }, []);

    const fetchPaymentLinks = () => {
        fetch('/setting/generate-Payment')
            .then(response => {
                const contentType = response.headers.get("content-type");
                if (!contentType || !contentType.includes("application/json")) {
                    throw new TypeError("Expected JSON response but received HTML");
                }
                return response.json();
            })
            .then(data => {
                setPaymentLinks(data);
                setLoading(false);
            })
            .catch(error => {
                setErrorMessage(error.message);
                setLoading(false);
            });
    };

    const handleChange = (e) => {
        setData(e.target.id, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('settings.generatePaymentLinkUpdate'), {
            data,
            onSuccess: (response) => {
                const { paymentLink } = response.data; // Ensure to access 'data' property
                setGeneratedLink(paymentLink);
                setShowModal(true);
                fetchPaymentLinks(); // Refresh payment links after successful submission
            },
            onError: (error) => {
                setErrorMessage('Failed to generate payment link.');
                console.error(error);
            },
        });
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setGeneratedLink(''); // Clear generated link on modal close
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
                                                    {errors.amount && <Form.Control.Feedback type="invalid">{errors.amount}</Form.Control.Feedback>}
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
                                                    {errors.Name && <Form.Control.Feedback type="invalid">{errors.Name}</Form.Control.Feedback>}
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
                                                    {errors.Email && <Form.Control.Feedback type="invalid">{errors.Email}</Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="phone_number">Phone Number</Form.Label>
                                                    <Form.Control
                                                        type="tel"
                                                        id="phone_number"
                                                        value={data.phone_number}
                                                        onChange={handleChange}
                                                        placeholder="Enter Phone Number"
                                                        isInvalid={!!errors.phone_number}
                                                        required
                                                    />
                                                    {errors.phone_number && <Form.Control.Feedback type="invalid">{errors.phone_number}</Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col>
                                            <Col xs={12}>
                                                <Button className="btn btn-primary" type="submit" disabled={processing}>
                                                    {processing ? 'Processing...' : 'Generate Link'}
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    {/* Display payment links in a table */}
                    <Row className="mt-4">
                        <Col>
                            <Card>
                                <Card.Body>
                                    <h4>Payment Links</h4>
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Phone Number</th>
                                                <th>Amount</th>
                                                <th>Payment Link</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {paymentLinks.map((link, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{link.Name}</td>
                                                    <td>{link.Email}</td>
                                                    <td>{link.phone_number}</td>
                                                    <td>{link.amount}</td>
                                                    <td>
                                                        <a href={link.payment_link} target="_blank" rel="noopener noreferrer">
                                                            {link.payment_link}
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
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

PaymentCreateShow.layout = (page) => <Layout>{page}</Layout>;

export default PaymentCreateShow;
