import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Table, Modal, Button, Form } from 'react-bootstrap';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import { Head, Link } from '@inertiajs/react';
import Layout from '../../Layouts';
import Swal from 'sweetalert2';

const UserKYC = ({ users }) => {
    const [userList, setUserList] = useState(users || []);
    const [error, setError] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: '',
        pancard: '',
        aadhaar: '',
    });

    useEffect(() => {
        if (!users) {
            fetchUsers();
        }
    }, [users]);

    const fetchUsers = () => {
        fetch('/user_management/user')
            .then(response => {
                const contentType = response.headers.get("content-type");
                if (!contentType || !contentType.includes("application/json")) {
                    throw new TypeError("Expected JSON response but received HTML");
                }
                return response.json();
            })
            .then(data => {
                setUserList(data);
            })
            .catch(error => {
                setError(error.message);
            });
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`/user_management/user/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                    }
                })
                .then(response => {
                    if (response.ok) {
                        setUserList(userList.filter(user => user.id !== id));
                        Swal.fire(
                            'Deleted!',
                            'The user has been deleted.',
                            'success'
                        );
                    } else {
                        Swal.fire(
                            'Error!',
                            'There was an error deleting the user.',
                            'error'
                        );
                    }
                })
                .catch(error => {
                    Swal.fire(
                        'Error!',
                        'There was an error deleting the user.',
                        'error'
                    );
                });
            }
        });
    };

    const handleEdit = (user) => {
        setSelectedUser(user);
        setFormData({
            id: user.id,
            name: user.name,
            email: user.email,
            pancard: user.pancard || '',
            aadhaar: user.aadhaar || '',
        });
        setShowEditModal(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        fetch(`/user_management/user/${selectedUser.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(updatedUser => {
            setUserList(userList.map(user => user.id === updatedUser.id ? updatedUser : user));
            setShowEditModal(false);
            Swal.fire(
                'Updated!',
                'The user has been updated.',
                'success'
            );
        })
        .catch(error => {
            Swal.fire(
                'Error!',
                'There was an error updating the user.',
                'error'
            );
        });
    };

    return (
        <React.Fragment>
            <Head title='User KYC | Time To Pay' />
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="User KYC" pageTitle="Tables" />
                    <Row>
                        <Col xl={12}>
                            <Card>
                                <Card.Body>
                                    <div className="live-preview">
                                        {error && <p className="text-danger">Error: {error}</p>}
                                        <div className="table-responsive">
                                            <Table className="align-middle table-nowrap mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">ID</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Email</th>
                                                        <th scope="col">Pancard</th>
                                                        <th scope="col">Aadhaar</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {userList.map(user => (
                                                        <tr key={user.id}>
                                                            <th scope="row"><Link href="#" className="fw-medium">{user.id}</Link></th>
                                                            <td>{user.name}</td>
                                                            <td>{user.email}</td>
                                                            <td>{user.pancard}</td>
                                                            <td>{user.aadhaar}</td>
                                                            <td>
                                                                <Link href="#" className="me-2" onClick={() => handleEdit(user)}>
                                                                    Edit
                                                                </Link>
                                                                <Link href="#" onClick={() => handleDelete(user.id)}>
                                                                    Delete
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Pancard</Form.Label>
                            <Form.Control
                                type="text"
                                name="pancard"
                                value={formData.pancard}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Aadhaar</Form.Label>
                            <Form.Control
                                type="text"
                                name="aadhaar"
                                value={formData.aadhaar}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
};

UserKYC.layout = (page) => <Layout children={page} />;
export default UserKYC;
