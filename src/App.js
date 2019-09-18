import React  from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './Products/Products'
import Header from './Header';

function App()  {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header title="Maybe you should do something here?"/>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <Products />
    </div>
  );
}

export default App;
