import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

//import Components
import UpgradeAccountNotise from './UpgradeAccountNotise';
import UsersByDevice from './UsersByDevice';
import Widget from './Widget';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import AudiencesMetrics from './AudiencesMetrics';
import AudiencesSessions from './AudiencesSessions';
import LiveUsers from './LiveUsers';
import TopReferrals from './TopReferrals';
import TopPages from './TopPages';
import { Head } from '@inertiajs/react';
import Layout from '../../Layouts';


const DashboardRetailer = () => {

    return (
        <React.Fragment>
            <Head title="Dashboard | Time To Pay"/>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Dashboard" pageTitle="Dashboards" />
                    <Row>
                        <Col xxl={5}>
                            {/* <UpgradeAccountNotise /> */}
                            <Widget />
                        </Col>
                        <LiveUsers />
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};
DashboardRetailer.layout =(page:any) => <Layout children={page}/>
export default DashboardRetailer;
