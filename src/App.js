import React, { Component } from 'react';
import './App.css';
import Homepage from "./pages/Homepage/Homepage"
import Footer from './organism/Footer/Footer';
import Navbar from './organism/Navbar/Navbar';
import Product from './pages/Product/Product';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar />
       {/* <Homepage /> */}
       <Product />
       <Footer />
      </div>
    );
  }
}

export default App;
