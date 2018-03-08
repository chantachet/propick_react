import React, { Component } from 'react'
import DeliveryDetail from '../Propick/DeliveryDetail'
import { Form, FormGroup, InputGroup, ControlLabel, FormControl, Button, Glyphicon } from 'react-bootstrap'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import locationIcon from './../../images/location-marker-flat.png'
import Map from './Map'
import AddressMarker from '../AddressMarker'
import * as Value from './../../constants/variable'

export default class Delivery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addressFrom: '', latFrom: '', lngFrom: '',
            addressTo: '', latlngTo: '', lngTo: '',
            value: ''
        }
        this.onChangeFrom = (address) => this.setState({ addressFrom: address })
        this.onChangeTo = (address) => this.setState({ addressTo: address })

        this.handleClick = this.handleClick.bind(this);
    }

    handleFormSubmit = (event) => {
        // event.preventDefault()

        // geocodeByAddress(this.state.addressFrom)
        //     .then(results => getLatLng(results[0]))
        //     // .then(latLng => console.log('latlngFrom', latLng))
        //     .then(latLng => this.setState({ latFrom: latLng.lat, lngFrom: latLng.lng }))
        //     .catch(error => console.error('Error', error))

        // geocodeByAddress(this.state.addressTo)
        //     .then(results => getLatLng(results[0]))
        //     // .then(latLng => console.log('latlngTo', latLng))
        //     .then(latLng => this.setState({ latTo: latLng.lat, lngTo: latLng.lng }))
        //     .catch(error => console.error('Error', error))
    }


    handleClick(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        const googleMapURL = Value.googleMapUrl
        const fromInputProps = {
            value: this.state.addressFrom,
            onChange: this.onChangeFrom,
            placeholder: 'Search Places...',
            autoFocus: true,
        }
        const toInputProps = {
            value: this.state.addressTo,
            onChange: this.onChangeTo,
            placeholder: 'Search Places...',
            autoFocus: true,
        }

        const renderSuggestion = ({ formattedSuggestion }) => (
            <div>
                <strong>{formattedSuggestion.mainText}</strong>{' '}
                <small>{formattedSuggestion.secondaryText}</small>
            </div>
        )

        const latFrom = this.state.latFrom
        const lngFrom = this.state.lngFrom
        const latTo = this.state.latTo
        const lngTo = this.state.lngTo

        var tagMap = "";
        if (this.state.addressFrom == "" && this.state.addressTo == "") {
            tagMap = <AddressMarker />
        } else {
            tagMap = <Map latFrom={latFrom} lngFrom={lngFrom}
                latTo={latTo} lngTo={lngTo}
                googleMapURL={googleMapURL} />
        }
        return (
            <div id="delivery">
                <div className="row">
                    <div id="map" className="col-xs-12 col-sm-6 col-md-6" >
                        {/* <DeliveryDetail from={this.state.latlngFrom} to={this.state.latlngTo}/> */}
                        {tagMap}

                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6">
                        <div className="row">
                            {/* <div className="col-xs-12 col-sm-1 col-md-1 hidden-xs" style={{ backgroundImage: "url(" + locationIcon + ")" }}></div> */}
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <Form inline id="formCalculate" onSubmit={this.handleFormSubmit}>
                                    <img src={locationIcon} alt="image" />
                                    <FormGroup controlId="formInlineName">
                                        <ControlLabel>From</ControlLabel>{' '}
                                        <PlacesAutocomplete id="from" inputProps={fromInputProps} renderSuggestion={renderSuggestion} />
                                    </FormGroup>{' '}
                                    <FormGroup controlId="formInlineEmail">
                                        <ControlLabel>To</ControlLabel>{' '}
                                        <PlacesAutocomplete id="to" inputProps={toInputProps} renderSuggestion={renderSuggestion} />
                                    </FormGroup>{' '}
                                    <div style={{ paddingTop: '20px' }}><Button type="submit" className="btn btn-primary btn-lg">CHECK PRICE</Button></div>
                                </Form>
                            </div>
                        </div>
                        <div id="calculate">
                            <div className="row">
                                <div className="col-xs-12 col-sm-4 col-md-5 text-right">
                                    <h3>Distance</h3>
                                </div>
                                <div className="col-xs-12 col-sm-4 col-md-2 text-right"><h3>12.8</h3></div>
                                <div className="col-xs-12 col-sm-4 col-md-4 text-left"><h3>Kilometre</h3></div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-4 col-md-5 text-right">
                                    <h3>Total Price</h3>
                                </div>
                                <div className="col-xs-12 col-sm-4 col-md-2 text-right"><h3>190</h3></div>
                                <div className="col-xs-12 col-sm-4 col-md-4 text-left"><h3>Baht</h3></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}