import React, { Component } from 'react'
import { PropickLogo, AppStore, PlayStore, Mobile, BGInfoPropick } from '../../constants/configImagePath'

export default class Info extends Component {
    render() {
        let title = "", titleDetail = ""
        if (this.props.detail) {
            title = this.props.detail[0]
            titleDetail = this.props.detail[1]
        }
        return (
            <div id="propick-info" className="info-bg" style={{ backgroundImage: "url(" + BGInfoPropick + ")" }}>
                <div className="container section-height" >
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6">
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
                    </div>
                </div>
            </div>
        )
    }
}