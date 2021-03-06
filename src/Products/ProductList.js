import React from 'react';
// import Button from '../Button/Button';

// Create product row
function Product(props) {
  return (
    <tr>
      <td>title</td>
      <td>price</td>
      <td>img tag</td>
      <td>Delete button (task 3)</td>
    </tr>
  );
}

//Remember to make use of the products from props
function ProductList(props) {
  let productList = props.products
    .filter(product => true)
    .map((product, index) => <Product key={index} />);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Image</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>{productList}</tbody>
    </table>
  );
}

export default ProductList;
