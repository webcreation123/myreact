// src/App.jsx
import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Component/Navbar';
import Slider from './Component/Slider';
import Cards from './Component/Cards';
import ProductList from './Component/ProductList';
import ProductDetail from './Component/ProductDetail';
import SignupSection from './Component/Signupsection';
import Banner from './Component/Banner';
import Footer from './Component/Footer';
import Contact from './Component/Contact';
import About from './Component/About';
import Shop from './Component/Shop';
import ShopListing from './Component/Productshop';

const MainLayout = () => (
  <>
    <Slider />
    <ProductList />
    <Banner />
    <ProductList />
    <Cards />
    <SignupSection />
  </>
);

const App = () => {
  console.log('✅ App rendered');
  return (
    <div id="app-wrapper" className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ShopListing />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
