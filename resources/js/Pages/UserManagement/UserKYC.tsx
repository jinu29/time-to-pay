import React from 'react';
import { Card, Col, Container, Row, Button, Table } from 'react-bootstrap';
import { Head, usePage } from '@inertiajs/react';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import Layout from '../../Layouts';
import { FaEdit, FaTrash } from 'react-icons/fa';

const UserKYC = () => {
    const { users = [] } = usePage().props;
    console.log(users,"user")
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
                                                {/* <th>ID</th> */}
                                                <th>User ID</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>PAN Card</th>
                                                <th>Aadhar Number</th>
                                                <th>Account NO</th>
                                                <th>IFSC Code</th>
                                                <th>KYC Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.length > 0 ? (
                                                users.map((user: any, index: number) => (
                                                    <tr key={index}>
                                                        <td>{user.id}</td>
                                                        <td>{user.name}</td>
                                                        <td>{user.email}</td>
                                                        {user.kyc ? (
                                                            <>
                                                                <td>{user.kyc.pan_number}</td>
                                                                <td>{user.kyc.aadhar_number}</td>
                                                                <td>{user.kyc.account_number}</td>
                                                                <td>{user.kyc.ifsc_code}</td>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <td>NA</td>
                                                                <td>NA</td>
                                                                <td>NA</td>
                                                                <td>NA</td>
                                                            </>
                                                        )}
                                                        <td>Failed</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="8" className="text-center">No distributors found</td>
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
