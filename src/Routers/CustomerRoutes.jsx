
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from '../pages/Cart/Cart';
import Footer from '../organism/Footer/Footer';
import Navbar from '../organism/Navbar/Navbar';
import Homepage from '../pages/Homepage/Homepage';
import ProductDetails from '../pages/Product/ProductDetails';
import Checkout from '../pages/Cart/Checkout';
import Order from '../pages/Account/Order/Order';
import OrderDetails from '../pages/Account/Order/OrderDetails';
import Product from '../pages/Product/Product';

function CustomerRoutes() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
                <Route path="/:product/:productId" element={<ProductDetails />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/account/order" element={<Order />} />
                <Route path="/account/order/:orderId" element={<OrderDetails />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default CustomerRoutes;
