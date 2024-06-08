import React from 'react';
import { Card, Col, Container, Row, Button, Table } from 'react-bootstrap';
import { Head, usePage } from '@inertiajs/react';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import Layout from '../../Layouts';
import { FaEdit, FaTrash } from 'react-icons/fa';

const UserKYC = () => {
    const { users = [] } = usePage().props;

    const handleEdit = (userId) => {
        // Handle edit functionality
        console.log('Editing user with ID:', userId);
    };

    const handleDelete = (userId) => {
        // Handle delete functionality
        console.log('Deleting user with ID:', userId);
    };

    return (
        <React.Fragment>
            <Head title="User Kyc | Time to Pay" />
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="User Kyc" pageTitle="Dashboard" />
                    <Row className="gy-4">
                        <Col>
                            <Card>
                                <Card.Body>
                                    <h5 className="card-title">User KYC</h5>
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>PAN Card</th>
                                                <th>Aadhar Number</th>
                                                <th>Role</th>
                                                <th>KYC Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.map((user, index) => (
                                                <tr key={index}>
                                                    <td>{user.id}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.panCard}</td>
                                                    <td>{user.aadhar}</td>
                                                    <td>{user.role}</td>
                                                    <td>Failed</td>
                                                    
                                                </tr>
                                            ))}
                                            {users.length === 0 && (
                                                <tr>
                                                    <td colSpan="7" className="text-center">No distributors found</td>
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

UserKYC.layout = (page) => <Layout children={page} />;
export default UserKYC;
