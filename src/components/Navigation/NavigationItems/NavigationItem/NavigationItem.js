import React from 'react';
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => {
    // removes whitespace and lowercases links
    let link = props.children.replace(/\s/g,'').toLowerCase();
    
    return (
        <li className="NavigationItem">
            <NavLink to={'/' + link}>
                { props.children }
            </NavLink>
        </li>
    )
};

export default navigationItem;