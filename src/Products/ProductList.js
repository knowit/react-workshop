import React from 'react';

const Product = ({id, name, price, img}) => (
  <tr>
    <td>{id}</td>
    <td>{name}</td>
    <td>{price}</td>
    <td>{img}</td>
  </tr>);

const ProductList = ({products, filter}) => {
  const productList = products
  .filter(product => product.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1) // Lowercase and match, hit will return >=0
  .map((product, index) => <Product key={index} {...product} />) // Create product row
  return (
    <table>
      <thead>
        <tr>
          <th>ID#</th>
          <th>Name</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {productList}
      </tbody>
    </table>
  )
}

export default ProductList;