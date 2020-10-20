import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import CaloryCalculate from '../calory/CaloryCalculate'
import FoodsCart from '../foodscart/FoodsCart'

export default class DashBoard extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs="3">
                        <CaloryCalculate />
                    </Col>
                    <Col xs="9">
                        <FoodsCart />
                    </Col>
                </Row>
            </div>
        )
    }
}
