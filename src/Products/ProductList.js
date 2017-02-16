import React from 'react';
import Button from '../Button/Button';

// Create product row
const Product = () => (
  <tr>
    <td>A beer row</td>
  </tr>
);

//Remember to make use of the products from props
const ProductList = ({products}) => {
  const productList = products
    .filter(filter => true)
    .map((product) => <Product key={product.id} />);

  return (
    <table>
      <thead>
        <tr>
          <th>What is this?</th>
        </tr>
      </thead>
      <tbody>
        {productList}
      </tbody>
    </table>
  );
}

export default ProductList;
