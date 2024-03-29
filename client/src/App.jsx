import React from 'react';
import {Routes, Route, useNavigate} from "react-router-dom"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inventory from './components/Inventory';
import About from './components/About';
import Home from './components/Home';
import OrderForm from './components/OrderForm';



function App() {
  return ( 
    <div id = "app">
    <Routes>
      <Route path ="/" element = {<Home />} />
      <Route path = "/inventory" element = {<Inventory/>} />
      <Route path = "/orders" element = {<OrderForm/>} />
      <Route path = "/about" element = {<About/>} />
    </Routes>
   
    </div>
   );
}

export default App