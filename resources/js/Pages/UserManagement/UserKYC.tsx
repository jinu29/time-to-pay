import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Row, Table, Form } from 'react-bootstrap';
import { Head, usePage, useForm } from '@inertiajs/react';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import Layout from '../../Layouts';

const UserKYC = () => {
    const { users: initialUsers = [] } = usePage().props;
    const [users, setUsers] = useState(initialUsers);
    const form = useForm({});

    useEffect(() => {
        if (form.recentlySuccessful) {
            window.location.reload();
            console.error('useEffect');
        }

        if (form.recentlyFailed) {
            console.error(form.errors);
        }
    }, [form]);

    const updateUserData = (updatedUserKyc) => {
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.id === updatedUserKyc.user_id
                    ? { ...user, kyc: updatedUserKyc }
                    : user
            )
        );
    };

    const handleToggle = (userId) => {
        form.post(`/toggle-kyc/${userId}`, {
            onSuccess: (page) => {
                const { userKyc } = page.props;
                updateUserData(userKyc);
            }
        });
    };

    const handleReject = (userId) => {
        form.post(`/reject-kyc/${userId}`, {
            onSuccess: (page) => {
                const { userKyc } = page.props;
                updateUserData(userKyc);
            }
        });
    };

    const handleSwitchChange = async (userId, isVerified) => {
        // Temporarily disable switch
        const updatedUsers = users.map(user => ({
            ...user,
            kyc: user.id === userId ? { ...user.kyc, is_verified: !user.kyc?.is_verified } : user.kyc
        }));
        setUsers(updatedUsers);

        if (isVerified) {
            await handleToggle(userId);
        } else {
            await handleReject(userId);
        }

        // Reload after post request
        window.location.reload();
    };

    return (
        <React.Fragment>
            <Head title="User KYC | Time to Pay" />
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="User KYC" pageTitle="Dashboard" />
                    <Row className="gy-4">
                        <Col>
                            <Card>
                                <Card.Body>
                                    <h5 className="card-title">User KYC</h5>
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th>User ID</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>PAN Card</th>
                                                <th>Aadhar Number</th>
                                                <th>Account NO</th>
                                                <th>IFSC Code</th>
                                                <th>KYC Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.length > 0 ? (
                                                users.map((user, index) => (
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
                                                        <td>{user.kyc ? user.kyc.status : 'NA'}</td>
                                                        <td>
                                                            <Form.Check
                                                                type="switch"
                                                                id={`switch-${index}`}
                                                                label=""
                                                                checked={user.kyc && user.kyc.is_verified}
                                                                onChange={(e) => handleSwitchChange(user.id, e.target.checked)}
                                                                disabled={form.processing}
                                                            />
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="9" className="text-center">No User KYC found</td>
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
