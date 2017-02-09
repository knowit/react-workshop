import React, { Component } from 'react';
import './Products.css'

export default class Products extends Component {
  constructor(props) {
    super(props);
  }
  /**
  Life cycle and normal functions
  **/

  render() {
    const beerProducts = [
      {"id":1,"name":"Nøgne Ø Imperial Stout","price":80,"img":"https://bilder.vinmonopolet.no/cache/300x300-0/1053802-1.jpg"},
    ]
    return (
      <div className="Products">
        // Do something crazy with beer in here.
      </div>
    )
  }
}
