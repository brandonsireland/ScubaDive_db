import React from 'react';
import Axios from 'axios';

import LocationItem from './LocationItem/LocationItem';

const location = (props) => {
    console.log(props)
    let transformedLocations = Object.keys(props.locationdata)
            .map(locationKey => {
                return [...Array(props.locationdata[locationKey])]
                .map(key => {
                    let keyValues = Object.values(key)
                    return <LocationItem key={keyValues[0]} title={keyValues[1]}/>
                });
            });

    return (
    <div className="Location">
        <div className="Location__container">
            <div className="Location__title">
                <span>{props.locationtitle}</span>
            </div>
            <ul className="Location__list">
            <React.Fragment>
                { transformedLocations }
            </React.Fragment>
            </ul>
        </div>
    </div> 
    )
};

export default location;