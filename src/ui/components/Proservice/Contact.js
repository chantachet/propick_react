import React, { Component } from 'react'
import { logoProservice } from '../../constants/configImagePath'

export default class Contact extends Component {
    constructor(props) {
        super(props)

    }
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
                    <div className="row">
                        {/* <Col xs={12} sm={2} md={2}></Col> */}
                        <div className="col-xs-12 col-sm-3 col-md-3">
                            <img src={logoProservice} alt="logo" />
                        </div>
                        <div className="col-xs-12 col-sm-3 col-md-3">
                            <p className="text-center wow fadeInDown"><h4 className="text-white">บริษัท โปรเซอร์วิส จำกัด</h4></p>
                            <div className="term-privacy"><a href="/proservice/term">Term Service</a>{' | '}<a href="/proservice/privacy">Privacy</a></div>
                            <div className="address">
                                <h4 className="text-white">Follow Us</h4>
                                <p>{tagFollow}</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6">
                            {/* <p className="text-left wow fadeInDown text-white">Address: 121/77 Ramindra 40-8, Nualjun, Beunggum Bangkok 10230</p>
                                <p className="text-left wow fadeInDown text-white">Tel: 02-949-9774-5, 02-519-2971, 087-972-2648</p>
                                <p className="text-left wow fadeInDown text-white">Email: info@proserviceplus.com</p> */}
                            <p className="text-left wow fadeInDown text-white"><h4>ที่อยู่: {this.props.address}</h4></p>
                            <p className="text-left wow fadeInDown text-white"><h4>โทร.: {this.props.tel}</h4></p>
                            <p className="text-left wow fadeInDown text-white"><h4>Email: {this.props.email}</h4></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}