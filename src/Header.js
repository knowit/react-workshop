import React, { PropTypes } from 'react';
/*
Task 1: Change the title of the header to 'My favourite beers' or something else.
Tip: Make use of props
*/

const Header = (props) =>
  <p>Hello, add a h2 title here</p>

// This is an example of prop validation (task 6), do not worry about this.
Header.propTypes = {
  title: React.PropTypes.string,
};

export default Header;
