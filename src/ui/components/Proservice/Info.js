import React, { Component } from 'react'
import { BGInfoProservice } from '../../constants/configImagePath'

export default class Info extends Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        const title = this.props.detail ? this.props.detail.Title : ""
        return (
            <div id="aboutus" style={{ backgroundColor: '#c10000' }}>
                <div className="row aboutus-info-bg" style={{ backgroundImage: "url(" + BGInfoProservice + ")" }}>
                    <div className="col-sm-12 text-center">
                        <div className="text-about-info ">
                            {/* <h1>PROFESSIONAL OF OUTSITE SERVICE AND DELIVERY</h1> */}
                            {/* <a className="btn btn-primary btn-lg" href="#">Find Out More</a> */}
                        </div>
                    </div>
                </div>
                <div className="row" className="aboutus-info">
                    <div className="col-xs-12 col-sm-12 col-md-12">
                        {/* <p>PROFESSIONAL  OF  OUTSITE  SERVICE AND DELIVERY</p> */}
                        <p>{title}</p>
                    </div>
                </div>
            </div>
        )
    }
}