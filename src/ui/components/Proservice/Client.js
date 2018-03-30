import React, { Component } from 'react'
import {
    bankchina, bangkokbank, bangjak, huawei, kasikorn,
    medical, msig, tmb, tot, aig, abn
} from '../../constants/configImagePath'
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