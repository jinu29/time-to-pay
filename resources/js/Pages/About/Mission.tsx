import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Styles/Mission.scss';
import MissionImage from '../../../images/img/mission-des.png';

const Mission = () => {
    return (
        <React.Fragment>
            <Container className="mission-container">
                <Row className="mission-box">
                    <Col lg={6}>
                        <div className="mission-text">
                            <div className="mission">
                                <h4>Our mission</h4>
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus justo, ultricies. Sollicitudin odio elementum urna placerat lacus, vulputate. Non malesuada viverra et ultrices cras. Tincidunt tempor, blandit augue ac feugiat. Praesent arcu tempus ullamcorper quisque in. Magna fermentum, lacus, fermentum arcu.</p>

                                <p className="mb-0">Vulputate pellentesque proin facilisis dignissim gravida sed faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in nisl, in quis nulla tellus suscipit id. Semper velit odio cras pretium tristique habitant. Elit eu penatibus congue orci turpis. Enim diam id.</p>
                            </div>
                            <div className="mission">
                                <h4>Our mission</h4>
                                <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam distinctio, libero incidunt facilis odio temporibus cumque quasi. Eligendi labore sed atque vel, at culpa saepe dolorem ipsa ab provident dignissimos.</p>

                                <p className="mb-0">Vulputate pellentesque proin facilisis dignissim gravida sed faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in nisl, in quis nulla tellus suscipit id. Semper velit odio cras pretium tristique habitant. Elit eu penatibus congue orci turpis. Enim diam id.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="mission-image">
                            <img src={MissionImage} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Mission;