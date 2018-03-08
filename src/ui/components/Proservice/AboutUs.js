import React, { Component } from 'react'
import './../../css/proservice.css'
import BGAboutUs from './../../images/0115.jpg'
import HomeMenu from '../Home/HomeMenu'
import Menu from '../Proservice/Menu'

export default class AboutUs extends Component {
    render() {
        return (
            <div id="aboutus">
                <HomeMenu />
                <Menu />
                <div className="row text-center">
                    <div className="col-sm-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                        <div className="item quality-info" style={{ backgroundImage: "url(" + BGAboutUs + ")" }}>
                        </div>
                        {/* <div className="detail-info" >
                            <img src={VivaOfficeImage} alt="img" />
                        </div> */}
                    </div>
                    <div className="col-sm-6">
                        <div className="panel-one">
                            <div className="text-center">
                                <h4 style={{ paddingTop: 50 }}></h4>
                                {/* {tagsDetail} */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-sm-6">
                        <div className="panel-one">
                            <div className="text-center">
                                <h4 style={{ paddingTop: 50 }}></h4>
                                {/* {tagsDetail} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}