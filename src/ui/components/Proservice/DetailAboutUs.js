import React, { Component } from 'react'
import { ImageDetailAboutUs } from '../../constants/configImagePath'

export default class DetailAboutUs extends Component {
    render(){
        let tagDetail = [];
        let companyName = "", paragaph = "", title = ""
        if(this.props.detail){
            companyName = this.props.detail.CompanyName
            paragaph = this.props.detail.Paragaph
            title = this.props.detail.Salocan
        }
        
        return(
            <div id="detailinfo" className="section-height">
                <div className="row text-center" >
                    <div className="col-sm-6">
                        <div className="panel-left">
                            <div className="text-center">
                                <p>{companyName}</p>
                                <p>{paragaph}</p>
                                <p><b>" {title} "</b></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                        <div className="item quality-info" style={{ backgroundImage: "url(" + ImageDetailAboutUs + ")" }}>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}