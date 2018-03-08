import React, { Component } from 'react'
// import QRCode from '../../images/qrcode.jpg'
import AppStore from './../../images/logo/appstore.png'
import PlayStore from './../../images/logo/googleplay.png'
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
                    <div className="propick-section-header">
                        <div className="section-title text-center wow fadeInDown"><h4 className="text-white">CONTACT US</h4></div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6">
                            <p className="text-center wow fadeInDown"><h5 className="text-white">Propick Co., Ltd.</h5></p>
                            <div className="address">
                                <h5 className="text-white">Follow Us</h5>
                                <p>{tagFollow}</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-5 col-md-5">
                            <p className="text-left wow fadeInDown text-white">Address: {this.props.address}</p>
                            <p className="text-left wow fadeInDown text-white">Tel: {this.props.tel}</p>
                            <p className="text-left wow fadeInDown text-white">Email: {this.props.email}</p>
                        </div>
                        {/* <div className="col-xs-6 col-sm-2 col-md-2 propick-logo-download">
                            <img src={AppStore} alt="apple" />
                        </div>
                        <div className="col-xs-6 col-sm-2 col-md-2 propick-logo-download">
                            <img src={PlayStore} alt="googleplay" />
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}