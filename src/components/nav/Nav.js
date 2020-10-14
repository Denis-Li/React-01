import React from 'react';
import './Nav.scss';

import {BrowserRouter as Link} from 'react-router-dom';


class Nav extends React.Component {
  // constructor(props){
  //   super(props)
  // }
  render(){
    return (
        <div className="header-nav">
            <div className="container">
              <nav>
                <ul>
                  <li><Link to="/">Main</Link></li>
                  <li><Link to="/apartments">Apartments</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><a href="/apartments">Apartments</a></li>
                  <li><a href="/services">Services</a></li>
                </ul>
              </nav>
            </div>
          </div>
    );
  }
}

export default Nav;
