import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { VariantSelector } from './VariantSelector.js'
import './App.css'
import {client} from './index.js'

export class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.findImage = this.findImage.bind(this);
  }

  componentWillMount() {
    this.props.product.options.forEach((selector) => {
      this.setState({
        selectedOptions: { [selector.name]: selector.values[0].value }
      });
    });
  }

  findImage(images, variantId) {
    const primary = images[0];

    const image = images.filter(function (image) {
      return image.variant_ids.includes(variantId);
    })[0];

    return (image || primary).src;
  }

  handleOptionChange(event) {
    const target = event.target
    let selectedOptions = this.state.selectedOptions;
    selectedOptions[target.name] = target.value;

    const selectedVariant = this.props.product.variants.find((variant) => {
      return variant.selectedOptions.every((selectedOption) => {
        return selectedOptions[selectedOption.name] === selectedOption.value.valueOf();
      });
    });

    this.setState({
      selectedVariant: selectedVariant,
      selectedVariantImage: selectedVariant.attrs.image.src
    });
  }

  handleQuantityChange(event) {
    this.setState({
      selectedVariantQuantity: event.target.value
    });
  }

  render() {
    let variantImage = this.state.selectedVariantImage || this.props.product.images[0].src
    let variant = this.state.selectedVariant || this.props.product.variants[0]
    let variantQuantity = this.state.selectedVariantQuantity || 1
    let variantSelectors = this.props.product.options.map((option) => {
      return (
        <VariantSelector
          handleOptionChange={this.handleOptionChange}
          key={option.id.toString()}
          option={option}
        />
      );
    });

    return (
        <Col sm="4">
          <div className="card">
            {this.props.product.images.length ? <img src={variantImage} className ="card-img-top" alt={`${this.props.product.title} product shot`}/> : null}
            <div className="card-body">
              <h4 className="card-title"><a href="product.html" title="View Product">{this.props.product.title}</a></h4>
              Quantity: 
              <input min="1" type="number" className="quantity" defaultValue={variantQuantity} onChange={this.handleQuantityChange}></input>
              <Row>
                <Col>
                  <p className="btn btn-danger btn-block">{variant.price}</p>
                </Col>
                <Col>
                  <button className="Product__buy btn btn-success btn-block" onClick={() => this.props.addVariantToCart(variant.id, variantQuantity)}>Add to cart</button>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
    );
  }
}

export default Product;
