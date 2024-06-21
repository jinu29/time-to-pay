import React, { useEffect, useState } from 'react';
import GuestLayout from '../../Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import logoLight from '../../../images/logo-light.png';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        role: '',
        pincode: '',
        city: '',
        state: '',
        country: '',
        password: '',
        password_confirmation: '',
    });

    const [stage, setStage] = useState(1);

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const nextStage = () => setStage(stage + 1);
    const prevStage = () => setStage(stage - 1);

    const submit = (e: any) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <React.Fragment>
            <GuestLayout>
                <Head title="Basic SignUp | Velzon - React Admin & Dashboard Template" />
                <div className="auth-page-content mt-lg-5">
                    <Container>
                        <Row className="justify-content-center">
                            <Col md={8} lg={6} xl={5}>
                                <Card className="mt-4 card-bg-fill">
                                    <Card.Body className="p-4">
                                        <div className="text-center mt-2">
                                            <h5 className="text-primary">Create New Account</h5>
                                        </div>
                                        <div className="p-2 mt-4">
                                            <form onSubmit={submit}>
                                                {stage === 1 && (
                                                    <>
                                                        <div>
                                                            <Form.Label htmlFor="name" className='form-label'>Name</Form.Label>
                                                            <span className="text-danger ms-1">*</span>
                                                            <Form.Control
                                                                id="name"
                                                                name="name"
                                                                placeholder="Enter name"
                                                                value={data.name}
                                                                className={"mt-1 form-control" + (errors.name ? ' is-invalid' : '')}
                                                                autoComplete="name"
                                                                autoFocus
                                                                onChange={(e: any) => setData('name', e.target.value)}
                                                                required
                                                            />
                                                            <Form.Control.Feedback type="invalid" className='mt-2 d-block'>{errors.name}</Form.Control.Feedback>
                                                        </div>

                                                        <div className="mt-4">
                                                            <Form.Label htmlFor="email" className='form-label'>Email</Form.Label>
                                                            <span className="text-danger ms-1">*</span>
                                                            <Form.Control
                                                                id="email"
                                                                type="email"
                                                                name="email"
                                                                placeholder="Enter email address"
                                                                value={data.email}
                                                                className={'mt-1 form-control' + (errors.email ? ' is-invalid' : '')}
                                                                autoComplete="username"
                                                                onChange={(e: any) => setData('email', e.target.value)}
                                                                required
                                                            />
                                                            <Form.Control.Feedback type="invalid" className='mt-2 d-block'>{errors.email}</Form.Control.Feedback>
                                                        </div>

                                                        <div className="mt-4">
                                                            <Form.Label htmlFor="phone" className='form-label'>Phone Number</Form.Label>
                                                            <span className="text-danger ms-1">*</span>
                                                            <Form.Control
                                                                id="phone"
                                                                type="text"
                                                                name="phone"
                                                                placeholder="Enter phone number"
                                                                value={data.phone}
                                                                className={"mt-1 form-control" + (errors.phone ? ' is-invalid' : '')}
                                                                onChange={(e: any) => setData('phone', e.target.value)}
                                                                required
                                                            />
                                                            <Form.Control.Feedback type="invalid" className='mt-2 d-block'>{errors.phone}</Form.Control.Feedback>
                                                        </div>

                                                        <div className="mt-4">
                                                            <Form.Label htmlFor="role" className='form-label'>Role</Form.Label>
                                                            <span className="text-danger ms-1">*</span>
                                                            <Form.Select
                                                                id="role"
                                                                name="role"
                                                                value={data.role}
                                                                className={"mt-1 form-control" + (errors.role ? ' is-invalid' : '')}
                                                                onChange={(e: any) => setData('role', e.target.value)}
                                                                required
                                                            >
                                                                <option value="">Select Role</option>
                                                                <option value="master-distributor">Master Distributor</option>
                                                                <option value="distributor">Distributor</option>
                                                                <option value="retailer">Retailer</option>
                                                            </Form.Select>
                                                            <Form.Control.Feedback type="invalid" className='mt-2 d-block'>{errors.role}</Form.Control.Feedback>
                                                        </div>

                                                        <div className="mt-4 text-end">
                                                            <Button onClick={nextStage} className="btn btn-primary">Next</Button>
                                                        </div>
                                                    </>
                                                )}

                                                {stage === 2 && (
                                                    <>
                                                        <div>
                                                            <Form.Label htmlFor="pincode" className='form-label'>Pincode</Form.Label>
                                                            <span className="text-danger ms-1">*</span>
                                                            <Form.Control
                                                                id="pincode"
                                                                type="text"
                                                                name="pincode"
                                                                placeholder="Enter pincode"
                                                                value={data.pincode}
                                                                className={"mt-1 form-control" + (errors.pincode ? ' is-invalid' : '')}
                                                                onChange={(e: any) => setData('pincode', e.target.value)}
                                                                required
                                                            />
                                                            <Form.Control.Feedback type="invalid" className='mt-2 d-block'>{errors.pincode}</Form.Control.Feedback>
                                                        </div>

                                                        <div className="mt-4">
                                                            <Form.Label htmlFor="city" className='form-label'>City</Form.Label>
                                                            <span className="text-danger ms-1">*</span>
                                                            <Form.Control
                                                                id="city"
                                                                type="text"
                                                                name="city"
                                                                placeholder="Enter city"
                                                                value={data.city}
                                                                className={"mt-1 form-control" + (errors.city ? ' is-invalid' : '')}
                                                                onChange={(e: any) => setData('city', e.target.value)}
                                                                required
                                                            />
                                                            <Form.Control.Feedback type="invalid" className='mt-2 d-block'>{errors.city}</Form.Control.Feedback>
                                                        </div>

                                                        <div className="mt-4">
                                                            <Form.Label htmlFor="state" className='form-label'>State</Form.Label>
                                                            <span className="text-danger ms-1">*</span>
                                                            <Form.Control
                                                                id="state"
                                                                type="text"
                                                                name="state"
                                                                placeholder="Enter state"
                                                                value={data.state}
                                                                className={"mt-1 form-control" + (errors.state ? ' is-invalid' : '')}
                                                                onChange={(e: any) => setData('state', e.target.value)}
                                                                required
                                                            />
                                                            <Form.Control.Feedback type="invalid" className='mt-2 d-block'>{errors.state}</Form.Control.Feedback>
                                                        </div>

                                                        <div className="mt-4">
                                                            <Form.Label htmlFor="country" className='form-label'>Country</Form.Label>
                                                            <span className="text-danger ms-1">*</span>
                                                            <Form.Control
                                                                id="country"
                                                                type="text"
                                                                name="country"
                                                                placeholder="Enter country"
                                                                value={data.country}
                                                                className={"mt-1 form-control" + (errors.country ? ' is-invalid' : '')}
                                                                onChange={(e: any) => setData('country', e.target.value)}
                                                                required
                                                            />
                                                            <Form.Control.Feedback type="invalid" className='mt-2 d-block'>{errors.country}</Form.Control.Feedback>
                                                        </div>

                                                        <div className="mt-4 d-flex justify-content-between">
                                                            <Button onClick={prevStage} className="btn btn-secondary">Previous</Button>
                                                            <Button onClick={nextStage} className="btn btn-primary">Next</Button>
                                                        </div>
                                                    </>
                                                )}

                                                {stage === 3 && (
                                                    <>
                                                        <div>
                                                            <Form.Label htmlFor="password" className='form-label'>Password</Form.Label>
                                                            <span className="text-danger ms-1">*</span>
                                                            <Form.Control
                                                                id="password"
                                                                type="password"
                                                                name="password"
                                                                placeholder="Enter password"
                                                                value={data.password}
                                                                className={"mt-1 form-control" + (errors.password ? ' is-invalid' : '')}
                                                                autoComplete="new-password"
                                                                onChange={(e: any) => setData('password', e.target.value)}
                                                                required
                                                            />
                                                            <Form.Control.Feedback type="invalid" className='mt-2 d-block'>{errors.password}</Form.Control.Feedback>
                                                        </div>

                                                        <div className="mt-4">
                                                            <Form.Label htmlFor="password_confirmation" className='form-label'>Confirm Password</Form.Label>
                                                            <span className="text-danger ms-1">*</span>
                                                            <Form.Control
                                                                id="password_confirmation"
                                                                type="password"
                                                                name="password_confirmation"
                                                                placeholder="Confirm password"
                                                                value={data.password_confirmation}
                                                                className={"mt-1 form-control" + (errors.password_confirmation ? ' is-invalid' : '')}
                                                                autoComplete="new-password"
                                                                onChange={(e: any) => setData('password_confirmation', e.target.value)}
                                                                required
                                                            />
                                                            <Form.Control.Feedback type="invalid" className='mt-2 d-block'>{errors.password_confirmation}</Form.Control.Feedback>
                                                        </div>

                                                        <div className="mt-4 d-flex justify-content-between">
                                                            <Button onClick={prevStage} className="btn btn-secondary">Previous</Button>
                                                            <Button type="submit" className="btn btn-primary" disabled={processing}>Sign Up</Button>
                                                        </div>
                                                    </>
                                                )}
                                            </form>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <div className="mt-4 text-center">
                                    <p className="mb-0">Already have an account ? <Link href={route('login')} className="fw-semibold text-primary text-decoration-underline"> Signin </Link> </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </GuestLayout>
        </React.Fragment>
    );
}
