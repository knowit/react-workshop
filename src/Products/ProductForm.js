import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';

const defaultState = {
  name: '',
  price: 0,
  img: '',
};

function ProductForm(props) {
  let { addProduct } = props;
  let [product, setProduct] = useState(defaultState);

  let onFieldChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    setProduct({ ...product, [name]: value });
  };

  let submitProduct = evt => {
    // We don't want to reload on submit
    evt.preventDefault();

    addProduct({ ...product, id: new Date().getTime() });

    // Make sure that the form is reset by setting the state back to the default
    setProduct(defaultState);
  };

  let { name, price, img } = product;
  return (
    <form onSubmit={submitProduct}>
      <Input
        name="name"
        type="text"
        onChange={onFieldChange}
        label="Name: "
        value={name}
      />
      <Input
        name="price"
        type="number"
        onChange={onFieldChange}
        label="Price: "
        value={price}
      />
      <Input
        name="img"
        type="text"
        onChange={onFieldChange}
        label="Image: "
        value={img}
      />
      <Input className="btn" name="submit" type="submit" />
    </form>
  );
}

ProductForm.propTypes = {
  addProduct: PropTypes.func.isRequired,
};

export default ProductForm;
