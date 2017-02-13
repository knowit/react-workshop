import React, { Component, PropTypes } from 'react';

class ProductFilter extends Component {
  static propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    filterText: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    // Read the value from the event
    const value = event.target.value;
    this.props.onFilterChange(value); // update productlist
  }

  render() {
    // Get the filterText from the component's props
    const { filterText } = this.props;

    return (
      <div>
        <label>
          Product filter:
          {' '}
          <input
            name="productFilter"
            value={filterText}
            placeholder="Type something..."
            onChange={this.handleInputChange}
            type="text"
            />
        </label>
      </div>
    );
  }
}

export default ProductFilter;
