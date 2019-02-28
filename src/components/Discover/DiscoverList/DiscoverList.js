import React from 'react';

import DiscoverListItem from './DiscoverListItem/DiscoverListItem';

const discoverList = (props) => {
    

    let transformedValues = Object.values(props.locationtypes);
    let transformedLocations = Object.keys(props.locationtypes)
            .map((locationKey, i) => {
                return <DiscoverListItem
                key={locationKey} 
                location={locationKey} 
                amount={transformedValues[i]} 
                updatelocation={() => props.findlocation(locationKey)}/>
            });
    
    return (
    <div className="DiscoverList">
        <h2>Click around and take a look!</h2>
         <ul>
            {transformedLocations }
         </ul>
    </div>
);
}


export default discoverList;