import React from "react";
import './Styles/Banner.scss';
import { Container } from "react-bootstrap";
import Slide from '../../../images/img/about-slide.png';

const Banner = () => {
    return (
        <React.Fragment>
            <div className="banner">
                <div className="slide">
                    <Container>
                        <div className="slide-details">
                            <div className="slide-text">
                                <h4>"Effortless Bill Management, Anytime, Anywhere"</h4>
                                <p className="mb-0"> it's utilities, rent, credit cards, or any other recurring expenses, our website ensures that you can handle your payments efficiently and on time, every time.</p>
                                <div className="buttons">
                                    <button className="pay-bill">Pay Bills</button>
                                    <button className="account">Open an Account</button>
                                </div>
                            </div>
                            <div className="slide-image">
                                <img src={Slide} alt="" />
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Banner;