import React from 'react';
import { Container } from 'react-bootstrap';
import './footer.css'
import sslcommerce from '../../img/ssl-commerce.1d268dce.png'

const Footer = () => {
    return (
        <div className="footer">
            <Container className = " d-flex pt-5  justify-content-around mt-5">
                <div>
                    <h1 className ="adress">Head Office - Banani Branch</h1>
                    <p>House# 74 Road# 7,</p>
                    <p>Block# H, Banani, Dhaka-1213</p>
                    <p>Phone: 01758066329, 01758066325, 01872650686,</p>
                    <p>01872657169</p>
                </div>
                <div>
                    <h1 className ="adress">Branch Office - Mirpur Branch</h1>
                    <p>HB Enterprise Bhaban.</p>
                    <p>Plot-9, Road-4, Section -7,</p>
                    <p>Mirpur-Dhaka 1216</p>
                    <p>Phone: 01872650688, 01872657167, 01872650685</p>
                    <div className ="d-flex">
                        <p className ="icons"><i className="fab fa-facebook"></i></p>
                        <p className ="icons"><i className="fab fa-instagram-square"></i></p>
                        <p className ="icons"><i className="fab fa-twitter"></i></p>
                        <p className ="icons"><i className="fab fa-linkedin"></i></p>
                    </div>
                   
                </div>
                <div>
                        <img src={sslcommerce} alt="" />
                    </div>
               

            </Container>
            <p className="text-center pb-3 mt-5">2020 Copyright © Shikhbe Shobai Solutions, All rights Reserved.</p>
        </div>
    );
};

export default Footer;