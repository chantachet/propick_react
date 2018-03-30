import React, { Component } from 'react'
import './../../css/warehouse.css'
import { Service1, Service2, Service3 } from '../../constants/configImagePath'

export default class Service extends Component {
    render() {
        var tagDetail = []
        var imageService = [Service1, Service2, Service3]
        if (this.props.detail) {
            this.props.detail.forEach((value, i) => {
                tagDetail.push(
                    <div key={i} className="col-xs-12 col-sm-4 col-md-4">
                        <div className="wow zoomIn" data-wow-duration="400ms" data-wow-delay="0ms">
                            <div className="service-item">
                                <div className="service-detail">
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
            <div id="service" className="padding-bottom-section propick-service-bg">
                <div className="row howgood-row-height-name">
                    <div className="col-xs-12 col-sm-3 col-md-3 hidden-xs"></div>
                    <div className="col-xs-12 col-sm-6 col-md-6 service-head">
                        <p>{this.props.name}</p>
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