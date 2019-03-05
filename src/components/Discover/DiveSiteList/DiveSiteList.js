import React from 'react';

import DiveSiteItem from './DiveSiteItem/DiveSiteItem';

const diveSiteList = (props) => {

    console.log(props)
    return (
        <div className="DiveSiteList">
        <span>{props.divesiteCount} dive sites in {props.locationTitle}</span>
            <ul>
                <DiveSiteItem/>
            </ul>
        </div>
    )
};

export default diveSiteList;