import React from 'react';
import Input from '../Input/Input';

const ProductFilter = () => {
  // eslint-disable-next-line no-unused-vars
  const handleInputChange = (evt) => {
    // Read the value from the event (evt)
    // update productlist with onFilterChange from props
  }
  return (
      <Input
        label="Product filter:"
        name="productFilter"
        placeholder="Type something..."
        type="text"
      />
  );
}

export default ProductFilter;
