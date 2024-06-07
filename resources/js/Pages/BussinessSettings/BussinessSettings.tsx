import React from 'react';
import { Card, Col, Container, Row, Form, Button } from 'react-bootstrap';
import { Head } from '@inertiajs/react';
import { usePage, useForm } from '@inertiajs/react';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import Layout from '../../Layouts';

const BusinessSettings = () => {
    const { settings } = usePage().props;

    const { data, setData, post, processing, errors } = useForm({
        platform_commission: settings.platform_commission || '',
        vendor_commission: settings.vendor_commission || '',
    });

    const handleChange = (e) => {
        setData(e.target.id, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('settings.BusinessSettingUpdate'), data);
    };

    return (
        <React.Fragment>
            <Head title='Business Settings | Time to Pay' />
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Business Settings" pageTitle="Dashboard" />
                    <Row className="gy-4">
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <Row className="gy-4">
                                            <Col xxl={3} md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="platform_commission">Platform Commission (%)</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="platform_commission"
                                                        value={data.platform_commission}
                                                        onChange={handleChange}
                                                        placeholder="Platform Commission (%)"
                                                        isInvalid={!!errors.platform_commission}
                                                    />
                                                    {errors.platform_commission && <Form.Control.Feedback type="invalid">{errors.platform_commission}</Form.Control.Feedback>}
                                                </Form.Group>
                                            </Col>
                                            <Col xxl={3} md={6}>
                                                <Form.Group>
                                                    <Form.Label htmlFor="vendor_commission">Vendor Commission (%)</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="vendor_commission"
                                                        value={data.vendor_commission}
                                                        onChange={handleChange}
                                                        placeholder="Vendor Commission (%)"
                                                        isInvalid={!!errors.vendor_commission}
                                                    />
                                                    {errors.vendor_commission && <Form.Control.Feedback type="invalid">{errors.vendor_commission}</Form.Control.Feedback>}
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

BusinessSettings.layout = (page) => <Layout children={page} />;
export default BusinessSettings;
