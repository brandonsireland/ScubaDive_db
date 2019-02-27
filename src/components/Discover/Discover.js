import React from 'react';
import DiscoverLocation from './DiscoverLocation/DiscoverLocation';
import DiscoverDiveSite from './DiscoverDiveSite/DiscoverDiveSite';

const discover = (props) => {

    let transformedValues = Object.values(props.locations);
    let transformedLocations = Object.keys(props.locations)
            .map((locationKey, i) => {
                return <DiscoverLocation 
                key={locationKey} 
                location={locationKey} 
                amount={transformedValues[i]} 
                updatelocation={() => props.findlocation(locationKey)}/>
            });

    return (
        <div className="Discover">
        <DiscoverDiveSite count={ props.divesites} />
            <ul className="DiscoverLocation">
                { transformedLocations }
            </ul>
        </div>
    )
    
}

export default discover;