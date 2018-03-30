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
                                <p><h3>{companyName}</h3></p>
                                <p className="text-justify"><h3>{paragaph}</h3></p>
                                <br/>
                                <p><h3><b>" {title} "</b></h3></p>
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