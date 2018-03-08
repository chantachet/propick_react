import React, { Component } from 'react'
import './../../css/menu.css'
import { IndexLinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
export default class Menu extends Component {
    render() {
        return (
            <div id="Menu">
                <Navbar fluid>
                    <Navbar.Header>
                        {/* <Navbar.Brand>
                            <a href="#proservice">PRO SERVICE</a>
                        </Navbar.Brand> */}
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav >
                            {/* <NavItem eventKey={1} href="/proservice/#info">Info</NavItem> */}
                            <NavItem eventKey={1} href="/propick/#howgood">How Good</NavItem>
                            <NavItem eventKey={2} href="/propick/#howto">How To</NavItem>
                            {/* <NavItem eventKey={3} href="/propick/#howwork">How Work</NavItem> */}
                            <NavItem eventKey={4} href="/propick/#service">How Services</NavItem>
                            <NavItem eventKey={5} href="/propick/#contactus">Contact Us</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}