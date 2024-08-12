import React, { Component } from 'react';
import './App.css';
import Homepage from "./pages/Homepage/Homepage"
import Footer from './organism/Footer/Footer';
import Navbar from './organism/Navbar/Navbar';
import Product from './pages/Product/Product';
import { BrowserRouter} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
  <BrowserRouter>

       <Navbar />
       {/* <Homepage /> */}
       <Product />
       <Footer />
       </BrowserRouter>
      </div>
    );
  }
}

export default App;
