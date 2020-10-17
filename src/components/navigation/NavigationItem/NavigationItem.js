import React from 'react';
import { NavLink } from 'react-router-dom';

function NavigationItem(props) {
    return (
        <li className="nav-item" >
            <NavLink
                to={props.link}
                exact={props.exact}
                className={props.className}
            >
                {props.children}
            </NavLink>

        </li>
    )
}

export default NavigationItem
