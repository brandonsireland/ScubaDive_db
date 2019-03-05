import React from 'react';
import DiveSiteDetail from './DiveSiteDetail/DiveSiteDetail';

const diveSiteDetails = props => (
    <div className="DiveSiteDetails">
        <div className="DiveSiteDetails__container">
            <DiveSiteDetail />
            <DiveSiteDetail />
            <DiveSiteDetail />
            <DiveSiteDetail />
            <DiveSiteDetail />
            <DiveSiteDetail />
        </div>
    </div>
);

export default diveSiteDetails;