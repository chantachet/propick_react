import React, { Component } from 'react'
import PropickLogo from './../../images/logo/logoApp2.png'
import AppStore from './../../images/logo/appstore.png'
import PlayStore from './../../images/logo/googleplay.png'
import Mobile from './../../images/screen/mobile_screen.png'
// import BGInfo from './../../images/9956.jpg'
import BGInfo from './../../images/0382.jpg'

export default class Info extends Component {
    render() {
        let title = "", titleDetail = ""
        if (this.props.detail) {
            title = this.props.detail[0]
            titleDetail = this.props.detail[1]
        }
        return (
            <div id="propick-info" className="info-bg" style={{ backgroundImage: "url(" + BGInfo + ")" }}>
                <div className="container section-height" >
                    {/* <div className="propick-section-header">
                        <div className="section-title text-center wow fadeInDown"><h4>Info</h4></div>
                    </div> */}
                    <div className="row">
                        {/* <div className="col-sm-1 col-md-1"></div> */}
                        <div className="col-xs-12 col-sm-5 col-md-5 left-infp-panel">
                            <div className="row">
                                <div className="propick-logo">
                                    <img src={PropickLogo} alt="logo" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 text-center text-white">
                                    <h2>{title}</h2>
                                </div>
                            </div>
                            <div className="row info-detail hidden-xs">
                                <div className="col-xs-12 col-sm-12 col-md-12 text-white">
                                    <p>{titleDetail}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 propick-logo-download">
                                    <img src={AppStore} alt="apple" />
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 propick-logo-download">
                                    <img src={PlayStore} alt="googleplay" />
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-xs-12 col-sm-6 col-md-6 right-info-panel">
                            <img src={Mobile} alt="mobile" />
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}