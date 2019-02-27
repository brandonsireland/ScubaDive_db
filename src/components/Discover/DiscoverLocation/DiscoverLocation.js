import React from 'react';

const discoverLocation = (props) => {
    let label = null;

    switch(props.location) {
        case('continent_count'):
            label = 'Continents';
            break;
        case('country_count'):
            label = 'Countries';
            break;
        case('region_count'):
            label = 'Regions';
            break;
        case('city_count'):
            label = 'Cities';
            break;
        case('city_add_count'):
            label = null
            break;
        case('city_add2_count'):
            label = null
            break;
        case('tag_count'):
            label = 'Tags';
            break;
        case('type_count'):
            label = 'Types';
            break;
            default: 
            label = null;
    }
    if(label == null){
        return null;
    }

    return (
        <li className="DiscoverLocation" onClick={ props.updatelocation }>
            <span>{label}</span>
            <span>: {props.amount}</span>
        </li>
        )
};

export default discoverLocation;