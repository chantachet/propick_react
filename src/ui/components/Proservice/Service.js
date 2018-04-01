import React, { Component } from 'react'
import './../../css/warehouse.css'
import { ServicePurchase, ServiceBilling, ServiceRecruit } from '../../constants/configImagePath'

export default class Service extends Component {
    render() {
        var imageService = [ServicePurchase, ServiceBilling, ServiceRecruit]
        var tagDetail = []
        if (this.props.detail) {
            this.props.detail.forEach((value, i) => {
                tagDetail.push(
                    <div className="col-xs-12 col-sm-4 col-md-4" key={i}>
                    <div className="card">
                            <div className="card-body">
                                <img className="card-img-top" src={imageService[i]} alt="image" />
                                <p className="card-block">{value}</p>
                            </div>
                        </div>
                </div>
                )
            })
        }
        return (
            <div id="proservice-service" className="padding-bottom-section pro-service-bg">
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