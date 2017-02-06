import React from 'react';
import Button from '../Button/Button';

const Product = ({id, name, price, img, deleteHandler}) => (
  <tr>
    <td>{name}</td>
    <td>{price}</td>
    <td><img src={img}/></td>
    <td><Button onClick={() => deleteHandler(id)}>Delete</Button></td>
  </tr>
);

const ProductList = ({products, filter, deleteHandler}) => {
  const productList = products
    .filter(product => product.name.toLowerCase().includes(filter.toLowerCase())) // Lowercase and match, hit will return >=0
    .map((product, index) => <Product key={index} {...product} deleteHandler={deleteHandler}  />); // Create product row
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {productList}
      </tbody>
    </table>
  );
}

export default ProductList;
