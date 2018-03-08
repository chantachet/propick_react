import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './../../css/App.css'
import './../../css/menu.css'

export default class HomeMenu extends Component {
    render() {
        return (
            <div className="row App-Bar">
                <div className="col-xs-6 col-sm-6 col-md-6 text-right" style={{borderRight: '2px solid rgb(222, 222, 222)'}}>
                    <NavLink id="mainmenu-proservice" to="/proservice" activeClassName="selected-proservice"><h4>PRO SERVICES</h4></NavLink>
                    {/* <Link to="/proservice">PRO SERVICES</Link> */}
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 text-left">
                    <NavLink id="mainmenu-propick" to="/propick" activeClassName="selected-propick"><h4>PRO PICK</h4></NavLink>
                </div>
            </div>
        );
    }
}