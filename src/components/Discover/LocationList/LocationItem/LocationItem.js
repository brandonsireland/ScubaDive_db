import React from 'react';

const locationItem = (props) => {
    console.log(props)
    return (
    <li className="LocationItem" onClick={() => props.getDiveSites(props.id) }>
        <span>{props.title}</span>
        <span>{props.divesitecount} divesites!</span>
    </li>
    )
};


export default locationItem;