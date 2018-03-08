import React, { Component } from 'react'
import './../../css/menu.css'
import { IndexLinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
export default class Menu extends Component {
    render() {
        return (
            <div id="proservice-menu">
                <Navbar fluid>
                    <Navbar.Header>
                        {/* <Navbar.Brand>
                            <a href="#proservice">PRO SERVICE</a>
                        </Navbar.Brand> */}
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav >
                            <NavItem eventKey={1} href="/proservice">หน้าหลัก</NavItem>
                            <NavItem eventKey={2} href="/proservice/aboutus">เกี่ยวกับเรา</NavItem>
                            <NavItem eventKey={3} href="/proservice/#service">บริการ</NavItem>
                            <NavItem eventKey={4} href="/proservice/#client">ลูกค้าธุรกิจ</NavItem>
                            <NavItem eventKey={5} href="/proservice/career">ร่วมงานกับเรา</NavItem>
                            {/* <IndexLinkContainer to="/proservice/career" activeClassName="active-link">
                                <NavItem eventKey={4}>ร่วมงานกับเรา</NavItem>
                            </IndexLinkContainer> */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}