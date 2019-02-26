import React from 'react';
import DiscoverLocation from './DiscoverLocation/DiscoverLocation';
import DiscoverDiveSite from './DiscoverDiveSite/DiscoverDiveSite';

const discover = (props) => {

    let transformedValues = Object.values(props.locations);
    let transformedLocations = Object.keys(props.locations)
            .map((locationKey, i) => {
                return <DiscoverLocation key={locationKey} location={locationKey} amount={transformedValues[i]}/>
            });

    return (
        <React.Fragment>
        <DiscoverDiveSite count={ props.divesites} />
            <ul className="DiscoverLocation">
                { transformedLocations }
            </ul>
        </React.Fragment>
    )
    
}

export default discover;