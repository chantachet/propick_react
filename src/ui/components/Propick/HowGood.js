import React, { Component } from 'react'

export default class HowGood extends Component {
    render() {
        var tagDetail = []
        if (this.props.detail) {
            this.props.detail.forEach((value, i) => {
                tagDetail.push(
                    <div className="col-xs-6 col-sm-3 col-md-3 howgood-detail">
                        <div className="head"><p>Good</p></div>
                        <span></span>
                        <div className="title"><p>{value}</p></div>
                    </div>
                )
            })
        }
        return (
            <div id="howgood" className="howgood-bg">
                <div className="container section-height" >
                    <div className="row howgood-row-height-name">
                        <div className="col-xs-12 col-sm-12 col-md-12 howgood">
                            <p>{this.props.name}</p>
                        </div>
                    </div>
                    <div className="row howgood-row-height-detail">
                        {tagDetail}
                    </div>
                </div>
            </div>
        )
    }
}