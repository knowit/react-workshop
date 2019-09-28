import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

// Create product row
const Product = ({ index, product, deleteProduct }) => {
  let { id, name, price, img } = product;
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <img src={img} alt="pic" />
      </td>
      <td>
        <Button onClick={() => deleteProduct(id)}>Delete</Button>
      </td>
    </tr>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  deleteProduct: PropTypes.func.isRequired,
};

//Remember to make use of the products from props
const ProductList = props => {
  let { deleteProduct, products, filterText } = props;

  const productList = products
    .filter(product =>
      product.name.toLowerCase().includes(filterText.toLowerCase()),
    )
    .map((product) => (
      <Product
        deleteProduct={deleteProduct}
        product={product}
        key={product.id}
      />
    ));

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
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired,
};

export default ProductList;
