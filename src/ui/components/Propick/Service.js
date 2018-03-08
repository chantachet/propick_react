import React, { Component } from 'react'
import './../../css/warehouse.css'
import Service1 from './../../images/0281.jpg'
import Service2 from './../../images/0056.jpg'
import Service3 from './../../images/0239.jpg'

export default class Service extends Component {
    render() {
        var tagDetail = []
        if (this.props.detail) {
            this.props.detail.forEach((value, i) => {
                tagDetail.push(
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <div className="wow zoomIn" data-wow-duration="400ms" data-wow-delay="0ms">
                            <div className="service-item">
                                <div class="service-detail">
                                    <img src={Service1} alt="image" />
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
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 service-head">
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