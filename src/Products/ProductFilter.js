import React, { Component, PropTypes } from 'react';

class ProductFilter extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(evt) {
    // Read the value from the event (evt)
    // update productlist with onFilterChange from props
  }

  render() {
    // Get the filterText from the component's props
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
}

export default ProductFilter;
