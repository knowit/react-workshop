import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import ProductFilter from './ProductFilter';
import './Products.css';
// import Button from '../Button/Button'
import ProductForm from './ProductForm';

export default function Products() {
  let [products, setProducts] = useState([]);
  let [filterText, setFilterText] = useState('');

  useEffect(() => {
      fetch('https://react-workshop-api.now.sh/graphql', {
        method: 'POST',
        body: JSON.stringify({ query: '{ beverages { name, price, img } }' }),
      })
      .then(response => response.json())
      .then(response => setProducts(response.data.beverages));
  }, []);

  /**
   * Whenever the filter changes, call this to update the filter text in the component's state
   */
  let handleFilterChange = filterText => {
    //Handle filter change here. Remember that the filter should be in the state.
    setFilterText(filterText);
  };

  let handleDeleteProduct = id => {
    //Handle delete products from state here
    setProducts(products.filter((product) => product.id !== id));
  };

  let handleAddProduct = product => {
    //Handle add products here.
    setProducts(products.concat(product));
  };

  return (
    <div className="Products">
      <ProductFilter onFilterChange={handleFilterChange} />
      <h2>Products</h2>
      <ProductList
        deleteProduct={handleDeleteProduct}
        filterText={filterText}
        products={products}
      />
      <ProductForm addProduct={handleAddProduct} />
    </div>
  );
}
