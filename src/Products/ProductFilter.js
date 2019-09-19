import React from 'react';

const ProductFilter = () => {

  const handleInputChange = (evt) => {
    // Read the value from the event (evt)
    // update productlist with onFilterChange from props
  }

  return (
    <div>
      <label>
        Product filter:
      </label>
      <input
        name="productFilter"
        placeholder="Type something..."
        type="text"
      />
    </div>
  );
}

export default ProductFilter;
