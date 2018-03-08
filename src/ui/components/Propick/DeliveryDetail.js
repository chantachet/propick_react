import React, { Component } from 'react'

export default class DeliveryDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            latFrom: props.from.lat,
            lngFrom: props.from.lng,
            latTo: props.to.lat,
            lngTo: props.to.lng
        }
    }
    render() {
        return (
            <div id="deliveryDetail">
                <div className="row">latFrom: {this.state.latFrom}</div>
                <div className="row">lngTo: {this.state.lngFrom}</div>
            </div>
        )
    }

}