import React, { Component } from 'react'
import LeftImage from './../../images/0147.jpg'
import RightImage from './../../images/0299.jpg'
import BGInfo from './../../images/9956.jpg'

export default class HowWork extends Component {
    render() {
        return (
            <div id="howwork" className="section-height howwork-bg">
                {/* <div className="section-header">
                        <div className="section-title text-center wow fadeInDown"><h4 style={{ color: 'white' }}>How Work</h4></div>
                    </div> */}
                <div className="row text-center">
                    <div className="col-sm-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                        <div className="item quality-info" style={{ backgroundImage: "url(" + LeftImage + ")" }}>
                        </div>
                    </div>
                    <div className="col-sm-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                        <div className="item quality-info" style={{ backgroundImage: "url(" + RightImage + ")" }}>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}