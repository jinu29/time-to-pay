import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Row, Table } from 'react-bootstrap';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import { Head, Link } from '@inertiajs/react';
import Layout from '../../Layouts';


const BasicTables = () => {
    const [users, setUsers] = useState([]);


    return (
        <React.Fragment>
            <Head title='User Management | Time To Pay'/>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="User Management" pageTitle="Tables" />
                    <Row>
                        <Col xl={12}>
                            <Card>
                                <Card.Body>
                                    <div className="live-preview">
                                        <div className="table-responsive">
                                            <Table className="align-middle table-nowrap mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">ID</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Email</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {users.map(user => (
                                                        <tr key={user.id}>
                                                            <th scope="row"><Link href="#" className="fw-medium">{user.id}</Link></th>
                                                            <td>{user.name}</td>
                                                            <td>{user.email}</td>
                                                            <td>
                                                                <Link href="#" className="me-2">
                                                                    <i className="ri-pencil-line"></i> {/* Edit Icon */}
                                                                </Link>
                                                                <Link href="#">
                                                                    <i className="ri-delete-bin-line"></i> {/* Delete Icon */}
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
        </React.Fragment>
    );
};

BasicTables.layout = (page: any) => <Layout children={page} />;

export default BasicTables;
