import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';

export class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer" id="footer">
        <footer>
          <Container>
            <Row>
              <Col lg="3" md="3" sm="4" xs="6">
                <h3> Products </h3>
                <ul>
                  <li> <a href="#"> Drones </a> </li>
                  <li> <a href="#"> Cars </a> </li>
                  <li> <a href="#"> Boats </a> </li>
                  <li> <a href="#"> Extras </a> </li>
                </ul>
              </Col>
              <Col lg="3" md="3" sm="4" xs="6">
                <h3> About </h3>
                <ul>
                  <li> <a href="#"> Contact </a> </li>
                  <li> <a href="#"> Info </a> </li>
                  <li> <a href="#"> Mission </a> </li>
                  <li> <a href="#"> Copyright </a> </li>
                </ul>
              </Col>
              <Col lg="3" md="3" sm="4" xs="6">
                <h3> We accept </h3>
                <ul id="payment-types">
                  <li><i className="fa fa-cc-visa"></i></li>
                  <li><i className="fa fa-cc-mastercard"></i></li>
                  <li><i className="fa fa-cc-amex"></i></li>
                  <li><i className="fa fa-cc-paypal"></i></li>
                </ul>
              </Col>
              <Col lg="3" md="3" sm="6" xs="6">
                <h3> Join mailing list </h3>
                <ul>
                  <li>
                  <div className="input-append newsletter-box text-center">
                    <input type="text" className="full text-center" placeholder="Email" />

                    <Button color="secondary">Signup <i className="fa fa-long-arrow-right"> </i></Button>
                  </div>
                  </li>
                </ul>
                <ul className="social">
                  <li> <a href="#"> <i className=" fa fa-facebook">   </i> </a> </li>
                  <li> <a href="#"> <i className="fa fa-twitter">   </i> </a> </li>
                  <li> <a href="#"> <i className="fa fa-google-plus">   </i> </a> </li>
                  <li> <a href="#"> <i className="fa fa-pinterest">   </i> </a> </li>
                  <li> <a href="#"> <i className="fa fa-youtube">   </i> </a> </li>
                </ul>
              </Col>
            </Row>
          </Container>
          <div className="footer-bottom">
            <Container>
              <p className="pull-left"> Copyright © ShopRcGadgets 2018 All Rights Reversed </p>
            </Container>
          </div>
        </footer>
      </div>
    );
  }
}
