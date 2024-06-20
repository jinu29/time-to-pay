import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Styles/FinanceFlow.scss';
import { financeflow } from '../../common/data/financeflow';

const FinanceFlow = () => {
    return (
        <React.Fragment>
            <Container className="finance">
                <h4 className="finance-title">What drives Finance Flow?</h4>
                <Row>
                    {financeflow.map((item) => (
                        <Col lg={6} key={item.id}>
                            <div className="finance-box">
                                <div className="box-image">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="box-details">
                                    <h5>{item.title}</h5>
                                    <p className="mb-0">{item.desp}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default FinanceFlow;