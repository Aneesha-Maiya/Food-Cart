import React from 'react';
import {Link} from "react-router-dom";
//import ReactDOM from 'react-dom/client';
 
export default function Navbar(){
    return(
        <div className="Navbar">
            <h3 className='Navbar_Logo'><i class="fa fa-bolt"></i>Lorem Ipsum</h3>
            <ul className='Navbar_List'>
                <li className='Navbar_Items'><Link to="/Item">Item</Link></li>
                <li className='Navbar_Items'><Link to="/Cart">Cart</Link></li>
                <li className='Navbar_Items'><Link to="/Bill">Bill</Link></li>
                <li className='Navbar_Items'>Services</li>
            </ul>
            
        </div>
    )
}
// <Link to=".\Test">Home</Link>