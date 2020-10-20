import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import CartList from "../cart/CartList";
import FoodsList from "../foods/FoodsList";

export default class FoodsCart extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="6">
            <FoodsList />
          </Col>
          <Col xs="6"><CartList/></Col>
        </Row>
      </div>
    );
  }
}
