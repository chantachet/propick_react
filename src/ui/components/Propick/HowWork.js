import React, { Component } from 'react'
import { HowWorkLeftImage, HowWorkRightImage } from '../../constants/configImagePath'

export default class HowWork extends Component {
    render() {
        return (
            <div id="howwork" className="section-height howwork-bg">
                {/* <div className="section-header">
                        <div className="section-title text-center wow fadeInDown"><h4 style={{ color: 'white' }}>How Work</h4></div>
                    </div> */}
                <div className="row text-center">
                    <div className="col-xs-12 col-sm-6 col-md-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                        <div className="item quality-info" style={{ backgroundImage: "url(" + HowWorkLeftImage + ")" }}>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                        <div className="item quality-info" style={{ backgroundImage: "url(" + HowWorkRightImage + ")" }}>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}