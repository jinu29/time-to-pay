import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "../Landing/Job_Landing/Navbar";
import Banner from "./Banner";
import FinanceFlow from "./FinanceFlow";
import Mission from "./Mission";

const About = () => {
    return (
        <React.Fragment>
            {/* <Navbar /> */}
            <Banner />
            <FinanceFlow />
            <Mission />
        </React.Fragment>
    )
}

export default About;