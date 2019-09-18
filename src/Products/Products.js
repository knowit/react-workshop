import React, { useState } from 'react';
import ProductList from './ProductList';
import ProductFilter from './ProductFilter';
import './Products.css';
// import Button from '../Button/Button'
import ProductForm from './ProductForm';

export default function Products() {
  let [products, setProducts] = useState([
    {
      name: 'Nøgne Ø Imperial Stout',
      price: 80,
      img: 'https://bilder.vinmonopolet.no/cache/300x300-0/1053802-1.jpg',
    },
  ]);

  /**
   * Whenever the filter changes, call this to update the filter text in the component's state
   */
  let handleFilterChange = filterText => {
    //Handle filter change here. Remember that the filter should be in the state.
  };

  let handleDeleteProduct = indexToDelete => {
    //Handle delete products from state here
  };

  let handleAddProduct = product => {
    //Handle add products here.
  };

  return (
    <div className="Products">
      <ProductFilter />
      <h2>Products</h2>
      <ProductList products={products} />
      <ProductForm />
    </div>
  );
}
