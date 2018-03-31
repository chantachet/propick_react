import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import './../../css/proservice.css'
import HomeMenu from '../Home/HomeMenu'
import Menu from '../Proservice/Menu'
import { BGCareer } from '../../constants/configImagePath'
import * as webConstant from '../../constants/variable'

export default class Career extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: '',
            name: '',
            email: '',
            phone: '',
            message: '',
            formsent: false,
            showModal: false
        };
    }

    handleSubjectChange = (e) => { this.setState({ subject: e.target.value }); }
    handleNameChange = (e) => { this.setState({ name: e.target.value }); }
    handleEmailChange = (e) => { this.setState({ email: e.target.value }); }
    handlePhoneChange = (e) => { this.setState({ phone: e.target.value }); }
    handleMessageChange = (e) => { this.setState({ message: e.target.value }); }
    handleHide = () => {
        this.setState({ showModal: false });
      }
    handleSubmit = (e) => {
        e.preventDefault()
        // fetch("https://wuyep6c0qg.execute-api.us-east-1.amazonaws.com/prod/sendemail", {
        //     method: "POST",
        //     body: {
        //         "mailTo": "i_am_454@hotmail.com",
        //         "mailFrom": "bussayakaew@gmail.com",
        //         "subject": "test",
        //         "text": "test mail 123"
        //     }
        fetch(webConstant.sendMailApi, {
            method: "POST",
            body: {
                "mailTo": this.state.email,
                "mailFrom": webConstant.emailOffice,
                "subject": this.state.subject,
                "text": this.state.message
            }
        }).then(response => response.json())
            .then((responseJson) => {
                if (responseJson == "Completed") {
                    this.setState({ subject: '', email: '', message: '', formSent: true, showModal: true })
                }
                else this.setState({ formSent: false })
            })
            .catch((error) => {
                console.error(error);
            });

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
                                    {/* <div className="form-group">
                                        <div className="col-xs-4 col-sm-4 col-md-2 hidden-xs"></div>
                                        <div className="col-xs-12 col-sm-5 col-md-8">
                                            <input className="form-control" type="text" placeholder="Name"
                                                onChange={this.handleNameChange} value={name} required="required" />
                                        </div>
                                    </div> */}
                                    <div className="form-group">
                                        <div className="col-xs-4 col-sm-4 col-md-2 hidden-xs"></div>
                                        <div className="col-xs-12 col-sm-5 col-md-8">
                                            <input className="form-control" type="email" placeholder="E-mail"
                                                onChange={this.handleEmailChange} value={email} required="required" />
                                        </div>
                                    </div>
                                    {/* <div className="form-group">
                                        <div className="col-xs-4 col-sm-4 col-md-2 hidden-xs"></div>
                                        <div className="col-xs-12 col-sm-5 col-md-8">
                                            <input className="form-control" type="tel" placeholder="Phone"
                                                onChange={this.handlePhoneChange} value={phone} required="required" />
                                        </div>
                                    </div> */}
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
                <Modal
                    show={this.state.showModal}
                    onHide={this.handleHide}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        {/* <Modal.Title id="contained-modal-title"> ร่วมงานกับเรา </Modal.Title> */}
                    </Modal.Header>
                    <Modal.Body>ส่งข้อความเรียบร้อย กรุณารอการติดต่อกลับจากเจ้าหน้าที่</Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}