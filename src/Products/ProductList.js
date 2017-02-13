import React from 'react';
import Button from '../Button/Button';


const Product = () => (
  <tr>
    <td>A beer row</td>
  </tr>
);

const ProductList = ({products}) => {
  const productList = products.filter(filter => true).map((product) => <Product />); // Create product row
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
