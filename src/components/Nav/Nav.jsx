import React, {Component} from 'react';
import {Link } from 'react-router-dom';
import './Nav.css'

class Nav extends Component {
    render(){
        return(
            <div className="Nav">
                <h1>Header</h1>
               <Link to="/about"> <h1>About</h1> </Link>
               <Link to="/"> Home</Link>
            </div>
        );
    }
}

export default Nav;
