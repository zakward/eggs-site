import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Footer from './Footer';
import { useNavigate } from "react-router-dom"

function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(true)

    const navigate = useNavigate()


    return (
        <div id="home">
            <div id="navbar">
                {!isMenuOpen ? <MenuIcon id="menu-icon" onClick={() => setIsMenuOpen(true)} /> : <MenuOpenIcon id="menu-icon" onClick={() => setIsMenuOpen(false)} />}
                <h1 className="company-name">A and B's</h1>
                <h1 className="company-name">Farm Fresh Eggs</h1>
            </div>


            {isMenuOpen && <ul id = "dropdown-menu">
                   
                   <li onClick = {()=> navigate("/inventory")} >Inventory</li>
                    <li onClick = {()=> navigate("/orders")}>Order Form</li>
                    <li>Farm Pictures</li>
                    <li>About WFR</li>
                </ul>}

<Footer />
           
        </div >
    );
}

export default Home;