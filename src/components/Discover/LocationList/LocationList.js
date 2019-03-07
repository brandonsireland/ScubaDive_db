import React from 'react';

import LocationItem from './LocationItem/LocationItem';

const location = (props) => {

    let transformedLocations = [];
    
    for(let i in props.locationdata){
        console.log(props.locationdata[i]['_id'])
        transformedLocations.push(
        <LocationItem
            divesitecount={props.locationdata[i]['divesites'].length}
            key={props.locationdata[i]['_id']} 
            title={props.locationdata[i]['title']}
            id={props.locationdata[i]['_id']}
            getDiveSites={ props.getDiveSitesData }/>
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