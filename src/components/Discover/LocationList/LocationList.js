import React from 'react';

import LocationItem from './LocationItem/LocationItem';

const location = (props) => {

    let transformedLocations = Object.keys(props.locationdata)
            .map(locationKey => {
                return [...Array(props.locationdata[locationKey])]
                .map((key, i , array) => {
                    console.log(key)
                    let keyValues = Object.values(key);
                    let keyAmount = keyValues[0].length;
                    let keyId = keyValues[1];
                    let keyTitle = keyValues[2];
                    return <LocationItem
                        divesitecount={keyAmount}
                        key={keyId} 
                        title={keyTitle}
                        updatelocaldata ={() => props.updatelocaldata({...key}) }
                        
                    />
                });
            });

    return (
    <div className="LocationList">
        <div className="LocationList__container">
            <div className="LocationList__title">
                <span>{props.locationtype}</span>
            </div>
            <ul className="LocationList__list">
            <React.Fragment>
                { transformedLocations }
            </React.Fragment>
            </ul>
        </div>
    </div> 
    )
};

export default location;