import React, { Component } from 'react';
import ProductList from './ProductList'
import ProductFilter from './ProductFilter'
import './Products.css'


export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1053802, name: 'Nøgne Ø Imperial Stout', price: 80, img: 'https://bilder.vinmonopolet.no/cache/300x300-0/1053802-1.jpg' },
        { id: 1793702, name: 'Kronenbourg 1664 Blanc', price: 40, img: 'https://bilder.vinmonopolet.no/cache/300x300-0/1793702-1.jpg' },
        { id: 6975202, name: 'Nøgne Ø Dark Horizon 5', price: 250, img: 'https://bilder.vinmonopolet.no/cache/300x300-0/6975202-1.jpg' },
        { id: 5233102, name: 'Brugse Zot Blond', price: 49, img: 'https://bilder.vinmonopolet.no/cache/300x300-0/5233102-1.jpg' },
        { id: 6977002, name: 'Brugse Zot Dubbel', price: 53, img: 'https://bilder.vinmonopolet.no/cache/300x300-0/6977002-1.jpg' },
        { id: 6989002, name: 'By The Horns Samba King Rye Ale', price: 55, img: 'https://bilder.vinmonopolet.no/cache/300x300-0/6989002-1.jpg' },
      ],
      filter: ''
    }
    this.filterHandler = this.filterHandler.bind(this);
  }

  filterHandler(value){
    this.setState(prevState => ({
      filter: value
    }));
  }

  render() {
    return (
      <div className="Products">
        <ProductFilter changeHandler={this.filterHandler} />
        <h2>Products</h2>
        <ProductList {...this.state} />
      </div>
    )
  }
}
