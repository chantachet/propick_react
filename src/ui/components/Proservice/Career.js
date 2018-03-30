import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import './../../css/proservice.css'
import HomeMenu from '../Home/HomeMenu'
import Menu from '../Proservice/Menu'
import { BGCareer } from '../../constants/configImagePath'

export default class Career extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: '',
            name: '',
            email: '',
            phone: '',
            message: '',
            formsent: false
        };
    }

    handleSubjectChange = (e) => { this.setState({ subject: e.target.value }); }
    handleNameChange = (e) => { this.setState({ name: e.target.value }); }
    handleEmailChange = (e) => { this.setState({ email: e.target.value }); }
    handlePhoneChange = (e) => { this.setState({ phone: e.target.value }); }
    handleMessageChange = (e) => { this.setState({ message: e.target.value }); }

    handleSubmit = (e) => {
        e.preventDefault()

        // fetch('/career', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         subject: this.state.subject,
        //         name: this.state.name,
        //         email: this.state.email,
        //         phone: this.state.phone,
        //         message: this.state.message
        //         // then continue this with the other inputs, such as email body, etc.
        //     })
        // })
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         if (responseJson.success) {
        //             this.setState({ formSent: true })
        //         }
        //         else this.setState({ formSent: false })
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });

        // const nodemailer = require('nodemailer');
        // const xoauth2 = require('xoauth2');

        // var transporter = nodemailer.createTransport({
        //     service: 'gmail',
        //     auth: {
        //         xoauth2: xoauth2.createXOAuth2Generator({
        //             user: 'my.email@gmail.com',
        //             clientId: '1034367757404-lvbn1vlsce8h00305cvd3oj7q74dnd74.apps.googleusercontent.com',
        //             clientSecret: 'Mt9vEBgEwgZVYLuxEN6VmlX2',
        //             refreshToken: 'Bearer ya29.GluGBZjpYFUoVeBO5oY3VAHOOIx_D4Tz0NR2UlQmw3ccP66iZ8pYZf_7Mqp_fRjDNSQPeOhIQxSd85ngevL4CQFhemtSLIvX5O2Su26VtCJVpgvlApnhUPcOEDPw'
        //         })
        //     }
        // })

        // var mailOptions = {
        //     from: 'My Name <my.email@gmail.com>',
        //     to: 'tanwut.bigboss@gmail.com',
        //     subject: 'Nodemailer test',
        //     text: 'Hello World!!'
        // }

        // transporter.sendMail(mailOptions, function (err, res) {
        //     if (err) {
        //         console.log('Error');
        //     } else {
        //         console.log('Email Sent');
        //     }
        // })


    }

    render() {
        const { subject, name, email, phone, message } = this.state;

        return (
            <div id="career">
                <HomeMenu />
                <Menu />
                <div className="row text-center career-bg" style={{ backgroundImage: "url(" + BGCareer + ")" }}>
                    <div className="col-xs-12 col-sm-6 col-md-6 hidden-xs" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                        {/* <div className="item career-info" style={{ backgroundImage: "url(" + RightImage + ")" }}>
                        </div> */}
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6">
                        <div className="career-panel">
                            <div className="text-center">
                                <h4 style={{ paddingTop: 50 }}>ร่วมงานกับเรา</h4>
                            </div>
                            <div>
                                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <div className="col-xs-4 col-sm-4 col-md-2 hidden-xs"></div>
                                        <div className="col-xs-12 col-sm-5 col-md-8">
                                            <input className="form-control" type="text" placeholder="Subject"
                                                onChange={this.handleSubjectChange} value={subject} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-4 col-sm-4 col-md-2 hidden-xs"></div>
                                        <div className="col-xs-12 col-sm-5 col-md-8">
                                            <input className="form-control" type="text" placeholder="Name"
                                                onChange={this.handleNameChange} value={name} required="required" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-4 col-sm-4 col-md-2 hidden-xs"></div>
                                        <div className="col-xs-12 col-sm-5 col-md-8">
                                            <input className="form-control" type="email" placeholder="E-mail"
                                                onChange={this.handleEmailChange} value={email} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-4 col-sm-4 col-md-2 hidden-xs"></div>
                                        <div className="col-xs-12 col-sm-5 col-md-8">
                                            <input className="form-control" type="tel" placeholder="Phone"
                                                onChange={this.handlePhoneChange} value={phone} required="required" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-4 col-sm-4 col-md-2 hidden-xs"></div>
                                        <div className="col-xs-12 col-sm-5 col-md-8">
                                            <textarea className="form-control" placeholder="Message" row={4}
                                                onChange={this.handleMessageChange} value={message} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-4 col-sm-4 col-md-2"></div>
                                        <div className="col-xs-12 col-sm-5 col-md-8 text-right">
                                            <Button type="submit" className="btn btn-primary">Send</Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}