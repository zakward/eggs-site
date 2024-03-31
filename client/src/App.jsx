import React, {useState} from 'react';
import {Routes, Route, useNavigate} from "react-router-dom"
import Footer from './components/Footer';
import Inventory from './components/Inventory';
import About from './components/About';
import Home from './components/Home';
import OrderForm from './components/OrderForm';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';




function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const navigate = useNavigate()
  return ( 
    <div id = "app">
          {!isMenuOpen ? <MenuIcon id="menu-icon" onClick={() => setIsMenuOpen(true)} /> : <MenuOpenIcon id="menu-icon" onClick={() => setIsMenuOpen(false)} />}
          
          {isMenuOpen && <ul id = "dropdown-menu">
                   
                   <li onClick = {()=> {
                   navigate("/inventory")
                  setIsMenuOpen(false)}} >Inventory</li>
                   
                   <li onClick = {()=> {
                   navigate("/orders")
                  setIsMenuOpen(false)}} >Order Form</li>
                    <li>Farm Pictures</li>
                    <li>About WFR</li>
                </ul>}
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