import React from 'react';
import Input from '../Input/Input';

function ProductFilter() {
  let handleInputChange = evt => {
    // Read the value from the event (evt)
    // update productlist with onFilterChange from props
  };

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
