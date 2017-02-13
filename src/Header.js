import React from 'react';

const Header = (props) =>
  <h2>Hello, {props.title}</h2>

// This is an example of prop validation, do not worry about this.
Header.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default Header;
