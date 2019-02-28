import React from 'react';

import LocationItem from './LocationItem/LocationItem';

const location = (props) => {

    let transformedLocations = Object.keys(props.locationdata)
            .map(locationKey => {
                return [...Array(props.locationdata[locationKey])]
                .map(key => {
                    let keyValues = Object.values(key)
                    return <LocationItem
                    divesitecount={keyValues[0].length}
                    key={keyValues[1]} 
                    title={keyValues[2]}
                    updatelocationbykey={() => props.updatelocationbykey(keyValues[1], props.locationtype)}
                    />
                });
            });

    return (
    <div className="Location">
        <div className="Location__container">
            <div className="Location__title">
                <span>{props.locationtype}</span>
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