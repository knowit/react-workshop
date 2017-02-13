import React, { Component } from 'react';
import ProductList from './ProductList'
import ProductFilter from './ProductFilter'
import './Products.css'
import Button from '../Button/Button'
import beerList from '../../data/data.json'
import ProductForm from './ProductForm'

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filter: ''
    }
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleDeleteProduct = this.handleDeleteProduct.bind(this);
    this.handleAddProduct = this.handleAddProduct.bind(this);

  }
  /**
  * When this component will mount, add the beer list to products
  */
  componentWillMount() {
    this.setState({ products: beerList })
  }
  /**
  * Whenever the filter changes, call this to update the filter text in the component's state
  */
  handleFilterChange(filterText){
    this.setState({ filter: filterText });
  }

  handleDeleteProduct(productId) {
    this.setState(prevState => ({
      products: prevState.products.filter(product => (product.id !== productId))
    }));
  }
  handleAddProduct(product) {
    const lastId = this.state.products[this.state.products.length-1].id
    this.setState(prevState => ({
      products: prevState.products.concat([{id: lastId, ...product}])
    }));
  }

  render() {
    return (
      <div className="Products">
        <ProductFilter
          onFilterChange={this.handleFilterChange}
          filterText={this.state.filter}
        />
        <h2>Products</h2>
        <ProductList products={this.state.products} filter={this.state.filter} deleteHandler={this.handleDeleteProduct} />
        <ProductForm onSubmit={this.handleAddProduct}/>
      </div>
    )
  }
}
