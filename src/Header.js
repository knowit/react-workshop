import React from 'react';
import PropTypes from 'prop-types';

/*
Task 1: Change the title of the header to 'My favourite beverages' or something else.
Tip: Make use of props
*/

function Header(props) {
  return <p>{props.title}</p>;
}

// This is an example of prop validation (task 6), do not worry about this.
Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
