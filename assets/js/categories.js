import React, { Component } from 'react';
import './App.css';
import {
  Row,
  Col,
} from 'reactstrap';

export class Categories extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <Row>
          <Col sm="8">
            <h2>Product Categories</h2>
          </Col>
        </Row>
        <Row>
          <Col sm="4">
            <a href="/shop">
              <img className="category-img" src="/assets/images/drone-in-hand.jpg"/>
              <h1 className="centered">Drones</h1>
            </a>
          </Col>
          <Col sm="4">
            <a href="/shop">
              <img className="category-img" src="/assets/images/rc-boat.jpg"/>
              <h1 className="centered">Boats</h1>
            </a>
          </Col>
        </Row>
        <Row>
          <Col sm="4">
            <a href="/shop">
              <img  className="category-img" src="/assets/images/rc-car.jpg"/>
              <h1 className="center-bottom">Cars</h1>
            </a>
          </Col>
          <Col sm="4">
            <a href="/shop">
              <img className="category-img" src="/assets/images/drone-gadgets.jpg"/>
              <h1 className="centered">Extras</h1>
            </a>
          </Col>
        </Row>
      </div>
    );
  }
}
