import React from 'react';

import DiveSiteItem from './DiveSiteItem/DiveSiteItem';

const diveSiteList = (props) => {
    console.log(props)
    return (
        <div className="DiveSiteList">
        <span>(Dive Site amount) dive sites in (area/region)</span>
            <ul>
                <DiveSiteItem/>
            </ul>
        </div>
    )
};

export default diveSiteList;