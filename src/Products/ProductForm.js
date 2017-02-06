import React, { Component } from 'react';
import Input from '../Input/Input';

const defaultState = {
  name: '',
  price: 0,
  img: '',
}

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
    this.onFieldChange = this.onFieldChange.bind(this);
    this.submitProduct = this.submitProduct.bind(this);
  }

  onFieldChange (event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState(prevState => ({
      [name]: value
    }));
  }
  submitProduct (evt) {
    evt.preventDefault();
    evt.target.reset();
    this.setState(defaultState)
    this.props.onSubmit(this.state);
  }
  render() {

    return (
      <form onSubmit={this.submitProduct}>
        <Input name="name" type="text" onChange={this.onFieldChange} label="Name: "/>
        <Input name="price" type="text" onChange={this.onFieldChange} label="Price: "/>
        <Input name="img" type="text" onChange={this.onFieldChange} label="Image: "/>
        <Input name="submit" type="submit"/>
      </form>
    )
  }
}

export default ProductForm;
