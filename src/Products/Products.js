import React, { Component } from 'react';
import ProductList from './ProductList'
import ProductFilter from './ProductFilter'
import './Products.css'
// import Button from '../Button/Button'
import ProductForm from './ProductForm'

export default class Products extends Component {

  state = {
    products: [
      {"name":"Nøgne Ø Imperial Stout","price":80,"img":"https://bilder.vinmonopolet.no/cache/300x300-0/1053802-1.jpg"},
    ],
    filter: '',
  }

  /**
  * Whenever the filter changes, call this to update the filter text in the component's state
  */
  handleFilterChange = (filterText) => {
    //Handle filter change here. Remember that the filter should be in the state.
  }

  handleDeleteProduct = (productId) => {
    //Handle delete products from state here
  }
  handleAddProduct = (product) => {
    //Handle add products here. As an id you can use the length of this.state.products + 1
  }

  render() {
    return (
      <div className="Products">
        <ProductFilter />
        <h2>Products</h2>
        <ProductList products={this.state.products}/>
        <ProductForm />
      </div>
    )
  }
}
