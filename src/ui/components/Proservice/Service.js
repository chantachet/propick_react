import React, { Component } from 'react'
import './../../css/warehouse.css'
// import Service1 from './../../images/0115.jpg'
// import Service2 from './../../images/0115.jpg'
// import Service3 from './../../images/0115.jpg'

import Service1 from './../../images/004.jpg'
import Service2 from './../../images/001.jpg'
import Service3 from './../../images/003.jpg'

export default class Service extends Component {
    render() {
        var imageService = [Service1, Service2, Service3]
        var tagDetail = []
        if (this.props.detail) {
            this.props.detail.forEach((value, i) => {
                tagDetail.push(
                    <div className="col-xs-12 col-sm-4 col-md-4">
                    <div className="wow zoomIn" data-wow-duration="400ms" data-wow-delay="0ms">
                        <div className="pro-service-item">
                            <div class="pro-service-detail">
                                <img src={imageService[i]} alt="image" />
                                <h3>{value}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                )
            })
        }
        return (
            <div id="service" className="padding-bottom-section pro-service-bg">
                <div className="row">
                    <div className="section-header">
                        <div className="section-title text-center wow fadeInDown"><h2>{this.props.name}</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-1 col-md-1 hidden-xs"></div>
                    <div className="col-xs-12 col-sm-10 col-md-10">
                        {tagDetail}
                    </div>
                </div>
                <div className="col-xs-12 col-sm-1 col-md-1 hidden-xs"></div>
            </div>
        )
    }
}