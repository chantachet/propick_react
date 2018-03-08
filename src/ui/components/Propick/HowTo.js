import React, { Component } from 'react'
import * as endpoint from './../../constants/endpoint'
import './../../css/timeline.css'
import ScreenLogin from './../../images/screen/screen1.jpg'
import ScreenMarkLocation from './../../images/screen/screen2.jpg'
import ScreenChooseService from './../../images/screen/screen3.jpg'
import ScreenConfirm from './../../images/screen/screen4.jpg'
import ControlledCarousel from '../Propick/ControlledCarousel'
import Mobile from './../../images/screen/mobile_screen.png'

export default class HowTo extends Component {
    render() {
        let images = [ScreenLogin, ScreenMarkLocation, ScreenChooseService, ScreenConfirm];
        let tagDetail = [];
        let carouselDetail = [];
        if (this.props.detail) {
            this.props.detail.forEach((value, i) => {
                carouselDetail.push(
                    { "image": images[i], "title": value }
                )
                tagDetail.push(<div><h3 className="text-white"><i className="fa fa-check-circle"></i> {value}</h3></div>)
            })
        }

        return (
            <div id="howto" className="howto-bg">
                <div className="container section-height" >
                    <div className="row howto-padding">
                        <div className="col-xs-12 col-sm-6 col-md-6">
                            <div className="image-gallery" style={{ backgroundImage: "url(" + Mobile + ")" }}>
                                <ControlledCarousel item={carouselDetail} />
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-5 col-md-5">
                            <div className="row howto-head">
                                <p>{this.props.name}</p>
                            </div>
                            <div className="row text-left">
                                {tagDetail}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}