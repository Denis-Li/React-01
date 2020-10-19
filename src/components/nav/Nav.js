import React from 'react';
import './Nav.scss';

import { Link } from 'react-router-dom';


class Nav extends React.Component {
  render(){
    return (

      <div className="header-nav">
        <div className="container">
          <nav className="navigation">
            <ul>
              <li><Link to="/">Main</Link></li>
              <li><Link to="/apartments">Apartments</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/directions">Directions</Link></li>
            </ul>

            <ul>
              <li><Link to="/auth" className="auth">Sign in/Sign Up</Link></li>
            </ul>
          </nav>
        </div>
      </div>

    );
  }
}

export default Nav;
