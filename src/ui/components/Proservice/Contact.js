import React, { Component } from 'react'
// import QRCode from '../../images/qrcode.jpg'
import { Grid, Row, Col } from 'react-bootstrap';

export default class Contact extends Component {
    render() {
        var tagFollow = [];
        this.props.followUs.forEach((value) => {
            tagFollow.push(
                <a href="#"><i className={value}></i>{' '}</a>
            )
        })
        return (
            <div id="contactus" style={{ paddingBottom: '50px', background: '#444444' }} >
                <div className="container" >
                    <div className="section-header">
                        <div className="section-title text-center wow fadeInDown"><h2 className="text-white">ติดต่อเรา</h2></div>
                    </div>
                    <Grid>
                        <Row>
                            <Col xs={12} sm={2} md={2}></Col>
                            <Col xs={12} sm={1} md={1}>
                                {/* <img src={QRCode} /> */}
                            </Col>
                            <Col xs={12} sm={3} md={3}>
                                <p className="text-center wow fadeInDown"><h5 className="text-white">บริษัท โปรเซอร์วิส จำกัด</h5></p>
                                <div className="">
                                    <h5 className="text-white">Follow Us</h5>
                                    <p>{tagFollow}</p>
                                </div>
                            </Col>
                            <Col xs={12} sm={5} md={5}>
                                {/* <p className="text-left wow fadeInDown text-white">Address: 121/77 Ramindra 40-8, Nualjun, Beunggum Bangkok 10230</p>
                                <p className="text-left wow fadeInDown text-white">Tel: 02-949-9774-5, 02-519-2971, 087-972-2648</p>
                                <p className="text-left wow fadeInDown text-white">Email: info@proserviceplus.com</p> */}
                                <p className="text-left wow fadeInDown text-white">ที่อยู่: {this.props.address}</p>
                                <p className="text-left wow fadeInDown text-white">โทร.: {this.props.tel}</p>
                                <p className="text-left wow fadeInDown text-white">Email: {this.props.email}</p>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}