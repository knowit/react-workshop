import React from 'react';
import Input from '../Input/Input';
import PropTypes from 'prop-types';

function ProductFilter({ onFilterChange }) {
  let handleInputChange = evt => {
    // Read the value from the event (evt)
    // update productlist with onFilterChange from props
    onFilterChange(evt.target.value);
  };

  return (
    <Input
      label="Product filter:"
      name="productFilter"
      onChange={handleInputChange}
      placeholder="Type something..."
      type="text"
    />
  );
}

ProductFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default ProductFilter;
