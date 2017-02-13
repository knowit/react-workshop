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
  }

  onFieldChange (event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    // Set the state based on the input field changed
  }
  submitProduct (evt) {
    // Make sure that the form is reset and the state is sat to default. 
  }
  render() {

    return (
      <form>
        <Input name="name" type="text"  label="Name: "/>
        <Input name="price" type="number" label="Price: "/>
        <Input name="img" type="text" label="Image: "/>
        <Input name="submit" type="submit"/>
      </form>
    )
  }
}

export default ProductForm;
