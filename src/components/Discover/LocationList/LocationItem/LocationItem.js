import React from 'react';

const locationItem = (props) => (
    <li className="LocationItem" onClick={ props.updatelocationbykey }>
        <span>{props.title}</span>
    </li>
);


export default locationItem;