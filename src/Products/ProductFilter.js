import React, { Component, PropTypes } from 'react';

class ProductFilter extends Component {
  static propTypes = {
    changeHandler: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.inputHandler = this.inputHandler.bind(this);
  }

  inputHandler(e) {
    const val = e.target.value;
    this.setState(prevState => ({ value: `${val}` })) // update state
    this.props.changeHandler(val); // update productlist
  }

  render() {
    return (
      <div>
        <label>
          Product filter:
          <input
            name="productFilter"
            value={this.state.value}
            placeholder="Type something..."
            onChange={this.inputHandler}
            type="text"
            />
        </label>
      </div>
    );
  }
}

export default ProductFilter;
