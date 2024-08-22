import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomerRoutes from './Routers/CustomerRoutes';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<CustomerRoutes />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
