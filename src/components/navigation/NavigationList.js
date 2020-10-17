import React from 'react';
import './NavigationList.scss';
import NavigationItem from './NavigationItem/NavigationItem'


function Nav(props) {
  return (

    <div className="header-nav">
      <div className="container">
        <nav className="navigation">
          <ul>
            <NavigationItem exact link="/" >Main</NavigationItem>
            <NavigationItem link="/apartments">Apartments</NavigationItem>
            <NavigationItem link="/services">Services</NavigationItem>
          </ul>

          <ul>
            <NavigationItem className="auth" link="/auth">Sign in/Sign Up</NavigationItem>
        </ul>
        </nav >
      </div >
    </div >

  );

}

export default Nav;
