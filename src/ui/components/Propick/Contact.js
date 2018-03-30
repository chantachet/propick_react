import React, { Component } from 'react'
import { QRCode } from '../../constants/configImagePath'
import { Grid, Row, Col } from 'react-bootstrap';

export default class Contact extends Component {
    render() {
        var tagFollow = [];
        this.props.followUs.forEach((value, i) => {
            tagFollow.push(
                <a href="#" key={i}><i className={value}></i>{' '}</a>
            )
        })
        return (
            <div id="contactus" style={{ paddingBottom: '50px', background: '#444444' }} >
                <div className="container" >
                    <div className="propick-section-header">
                        <div className="section-title text-center wow fadeInDown"><h4 className="text-white">CONTACT US</h4></div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-3 col-md-3">
                            <img className="qrcode-propick" src={QRCode} alt="qrcode" />
                        </div>
                        <div className="col-xs-12 col-sm-3 col-md-3">
                            <div className="text-center wow fadeInDown"><h4 className="text-white">Propick Co., Ltd.</h4></div>
                            <div className="term-privacy"><a href="/propick/term">Term Service</a>{' | '}<a href="/propick/privacy">Privacy</a></div>
                            <div className="address">
                                <h4 className="text-white">Follow Us</h4>
                                <p>{tagFollow}</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6">
                            <p className="text-left wow fadeInDown text-white"><h4>Address: {this.props.address}</h4></p>
                            <p className="text-left wow fadeInDown text-white"><h4>Tel: {this.props.tel}</h4></p>
                            <p className="text-left wow fadeInDown text-white"><h4>Email: {this.props.email}</h4></p>
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