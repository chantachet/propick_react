import React, { Component } from 'react'
import ImageClient from './../../images/client.jpg'
import bankchina from './../../images/logo/bankchina.png'
import bangkokbank from './../../images/logo/bangkokbank.png'
import bangjak from './../../images/logo/bangjak.png'
import huawei from './../../images/logo/huawei.png'
import kasikorn from './../../images/logo/kasikorn.png'
import medical from './../../images/logo/medical.png'
import msig from './../../images/logo/msig.png'
import tmb from './../../images/logo/tmb.png'
import tot from './../../images/logo/tot.png'
import aig from './../../images/logo/aig.png'
import abn from './../../images/logo/abn.png'
import { Grid, Row, Col } from 'react-bootstrap'

export default class Client extends Component {
    render() {
        let images = [bankchina, bangkokbank, bangjak, huawei, kasikorn];
        let images2 = [medical, msig, tmb, tot, abn]
        let tagImage = [], tagImage2 = [];
        images.forEach((value, i) => {
            tagImage.push(
                <Col xs={6} sm={2} md={2} className="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="100ms">
                    <div className="ourclient" >
                        <img src={value} alt="img" />
                    </div>
                </Col>)
        });
        images2.forEach((value, i) => {
            tagImage2.push(
                <Col xs={6} sm={2} md={2} className="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="100ms">
                    <div className="ourclient" >
                        <img src={value} alt="img" />
                    </div>
                </Col>)
        });
        return (
            <div id="client">
                <div className="section-header">
                    <div className="section-title text-center wow fadeInDown"><h2>{this.props.name}</h2></div>
                </div>
                <Grid>
                    <Row className="client">
                        <Col xs={6} sm={1} md={1}></Col>
                        <div className="features">{tagImage}</div>
                        <Col xs={6} sm={1} md={1}></Col>
                    </Row>
                    <Row className="client">
                        <Col xs={6} sm={1} md={1}></Col>
                        <div className="features">{tagImage2}</div>
                        <Col xs={6} sm={1} md={1}></Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}