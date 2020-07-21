import React, {Component} from 'react';
import {Link } from 'react-router-dom';
import './nav.css'

class Nav extends Component {
    render(){
        return(
            <div className="navbar Navbar-light color shadow"> 
                <Link to="/"> Home</Link> 
                <ul className="navbar color justify-content-right">
                <Link to="/about" className="Navbar-link">About</Link> 
                </ul>
        </div> 
        );
    }
}

export default Nav;
