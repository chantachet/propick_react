import React, { Component } from 'react'
import './../../css/App.css'
import { LeftImage, RightImage } from '../../constants/configImagePath'
import HomeMenu from './HomeMenu'
import Footer from './Footer'

export default class Home extends Component {
    render() {
        return (
            <div id="home" className="homepage">
                <HomeMenu />
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 App-Image">
                        <img src={LeftImage} alt="leftImage" />
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 App-Image">
                        <img src={RightImage} alt="rightImage" />
                    </div>
                </div>
                <div className="row col-sm-12 text-center" style={{backgroundColor: 'lightgray'}}>
                    ©2018 All rights reserved - Pro Services Co., Ltd.
                </div>
                {/* <Footer/> */}
            </div>
        )
    }
}