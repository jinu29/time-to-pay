import React from "react";
import { Col, Container } from "react-bootstrap";
import Quartz from '../../../../images/img/quartzlogo.png';
import Bloomberg from '../../../../images/img/bloomberg.png';
import Cnbc from '../../../../images/img/cnbg.png';
import Forbes from '../../../../images/img/forbes.png';
import Tc from '../../../../images/img/techcrunch.png';
import './Styles/Logo.scss';

const Logo = () => {
    return (
        <React.Fragment>
            <div className="logos">
                <Container className="logo">
                    <img src={Quartz} alt="Quartz logo" />
                    <img src={Bloomberg} alt="Bloomberg" />
                    <img src={Forbes} alt="Forbes" />
                    <img src={Tc} alt="Techcrunch logo" />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Logo;