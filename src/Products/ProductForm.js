import React, { useState } from 'react';
import Input from '../Input/Input';

const defaultState = {
  name: '',
  price: 0,
  img: '',
};

function ProductForm(props) {
  let [product, setProduct] = useState(defaultState);

  let handleFieldChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    // Remove this when you get it working
    console.log(`field ${name} changed to value: ${value}`);
    // Update the state based on the input field changed
  };

  let submitProduct = evt => {
    // We don't want to reload on submit
    evt.preventDefault();
    // Make sure that the form is reset by setting the state back to the default
  };

  let { name, price, img } = product;
  return (
    <form>
      <Input name="name" type="text" label="Name: " value={name} />
      <Input name="price" type="number" label="Price: " value={price} />
      <Input name="img" type="text" label="Image: " value={img} />
      <Input className="btn" name="submit" type="submit" />
    </form>
  );
}

export default ProductForm;
