import React from 'react';

import LocationItem from './LocationItem/LocationItem';

const location = (props) => {
    let transformedLocations = [];
    
    for(let i in props.locationdata){
        transformedLocations.push(
        <LocationItem
            divesitecount={props.locationdata[i]['divesites'].length}
            key={props.locationdata[i]['divesites']} 
            title={props.locationdata[i]['title']}
            updatelocaldata ={() => props.updatelocaldata({...props.locationdata[i]}) }/>
        )
    };

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