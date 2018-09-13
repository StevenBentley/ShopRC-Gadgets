import React, { Component } from 'react';
import { Row, Button } from 'reactstrap';
import Product from './Product.js'
import '../css/App.css'

export class HotProducts extends Component {

  render() {
    let products = this.props.products.slice(3).map((product) => {
      return (
        <Product
          addVariantToCart={this.props.addVariantToCart}
          checkout={this.props.checkout}
          key={product.id.toString()}
          product={product}
        />
      );
    });
    return (
      <div>
        <h2>HOT Products</h2>
          <Row id="Product">
            {products[0]}
            {products[1]}
            {products[7]}
          </Row>
      </div>
    );
  }
}

export default HotProducts;
