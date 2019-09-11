import React from 'react';
import PropTypes from 'prop-types';

const ProductFilter = ({ onFilterChange }) => {
  // eslint-disable-next-line no-unused-vars
  const handleInputChange = evt => {
    // Read the value from the event (evt)
    // update productlist with onFilterChange from props
    onFilterChange(evt.target.value);
  };
  return (
    <div>
      <label>Product filter:</label>
      <input
        name="productFilter"
        onChange={handleInputChange}
        placeholder="Type something..."
        type="text"
      />
    </div>
  );
};

ProductFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default ProductFilter;
