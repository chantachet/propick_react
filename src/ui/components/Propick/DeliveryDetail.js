import React, { Component } from 'react'
import * as Value from './../../constants/variable'

export default class DeliveryDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            distance: 0,
            price: 0
        }

    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.latFrom > 0 && nextProps.lngFrom > 0 && nextProps.latTo > 0 && nextProps.lngTo > 0) {
    //         if ((nextProps.latFrom !== this.props.latFrom || nextProps.latTo !== nextProps.latTo)
    //             || (nextProps.lngFrom !== this.props.lngFrom || nextProps.lngTo !== nextProps.lngTo)) {
    //             this.getDistance(nextProps.latFrom, nextProps.lngFrom, nextProps.latTo, nextProps.lngTo)
    //             console.log("this.getDistance:componentWillReceiveProps")
    //         }
    //     }
        
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     // if ((nextProps.latFrom !== this.props.latFrom || nextProps.latTo !== nextProps.latTo)
    //     // || (nextProps.lngFrom !== this.props.lngFrom || nextProps.lngTo !== nextProps.lngTo)) {
    //         return true
    //     // } else {
    //     //     return false
    //     // }
    // }

    getDistance = async (latFrom, lngFrom, latTo, lngTo) => {
        let service = new window.google.maps.DistanceMatrixService();
        await service.getDistanceMatrix(
            {
                origins: [latFrom + "," + lngFrom],
                destinations: [latTo + "," + lngTo],
                travelMode: window.google.maps.TravelMode.DRIVING,
                avoidHighways: false,
                avoidTolls: false,
                unitSystem: window.google.maps.UnitSystem.IMPERIAL
            }, (response, status) => {
                if (status === "OK") {
                    var dest = response.destinationAddresses[0]
                    var distance = response.rows[0].elements[0].distance.value / 1000
                    console.log("service.getDistanceMatrix: OK", response)
                    this.calculate(distance)
                } else {
                    console.log("Error: " + status);
                }
            }
        );
        console.log("service.getDistanceMatrix")
    }

    calculate = (newDistance) => {
        let distance = ((newDistance) - Value.defaultDistance) * 10
        let price = Value.defaultPrice + distance
        this.setState({
            distance: parseFloat(newDistance).toFixed(2),
            price: Math.round(price, 1)
        })
    }

    render() {
        this.getDistance(this.props.latFrom, this.props.lngFrom, this.props.latTo, this.props.lngTo)
        console.log("DeleveryDetail:render=", this.props.lngTo)
        return (
            <div id="calculate">
                <div className="row">
                    <div className="col-xs-5 col-sm-4 col-md-5 text-right">
                        <h3>Distance</h3>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-2 text-right"><h3>{this.state.distance}</h3></div>
                    <div className="col-xs-2 col-sm-4 col-md-4 text-left"><h3>KM.</h3></div>
                </div>
                <div className="row">
                    <div className="col-xs-5 col-sm-4 col-md-5 text-right">
                        <h3>Total Price</h3>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-2 text-right"><h3>{this.state.price}</h3></div>
                    <div className="col-xs-2 col-sm-4 col-md-4 text-left"><h3>Baht</h3></div>
                </div>
            </div>
        )
    }

}