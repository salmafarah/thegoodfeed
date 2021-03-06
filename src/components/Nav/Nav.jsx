import React, {Component} from 'react';
import {Link } from 'react-router-dom';
import './Nav.css'

class Nav extends Component {
    render(){
        return(
            <div className=" navbar Padding BackImg"> 
                <Link to="/">
                <img src="https://imgur.com/y9fJ7XI.jpg" alt="logo" className="Sizeimg"/>
                </Link> 
                <div className="Aboutnav">
                <Link to="/about" className="Nounderline"><button className="Textline Text btn Nounderline "> About</button></Link>
                </div>
            </div>
        );
    }
}

export default Nav;
