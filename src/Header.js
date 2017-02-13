import React from 'react';
/*
Task 1: Change the title of the header to 'My favourite beers' or something else.
Tip: Make use of props
*/

const Header = () =>
  <p>Hello, add a h2 title here</p>

// This is an example of prop validation, do not worry about this.
Header.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default Header;
