import React from 'react';
import './Nav.scss';

import { NavLink } from 'react-router-dom';


class Nav extends React.Component {
  render(){
    return (

      <div className="header-nav">
        <div className="container">
          <nav className="navigation">
            <ul>
              <li><NavLink to="/" exact activeClassName="header-nav__active">Main</NavLink></li>
              <li><NavLink to="/apartments" activeClassName="header-nav__active">Apartments</NavLink></li>
              <li><NavLink to="/services" activeClassName="header-nav__active">Services</NavLink></li>
              <li><NavLink to="/directions" activeClassName="header-nav__active">Directions</NavLink></li>
            </ul>

            <ul>
              <li><NavLink to="/auth" className="auth" activeClassName="header-nav__active">Sign in/Sign Up</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>

    );
  }
}

export default Nav;
