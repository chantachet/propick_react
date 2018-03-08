import React, { Component } from 'react'
import './../../css/proservice.css'
import LeftImage from './../../images/002.jpg'
import HomeMenu from '../Home/HomeMenu'
import Menu from '../Proservice/Menu'

export default class Career extends Component {
    render() {
        return (
            <div id="career">
                <HomeMenu />
                <Menu />
                <div className="row text-center">
                    <div className="col-sm-6">
                        <div className="panel-one">
                            <div className="text-center">
                                <h4 style={{ paddingTop: 50 }}></h4>
                                {/* {tagsDetail} */}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                        <div className="item quality-info" style={{ backgroundImage: "url(" + LeftImage + ")" }}>
                        </div>
                        {/* <div className="detail-info" >
                            <img src={VivaOfficeImage} alt="img" />
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}