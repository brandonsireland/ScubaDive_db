import React from 'react';
import DiveSiteImages from './DiveSiteImages/DiveSiteImages';
import DiveSiteDetails from './DiveSiteDetails/DiveSiteDetails';
import DiveSiteDescription from './DiveSiteDescription/DiveSiteDescription';
import DiveSiteUpdateButton from './DiveSiteUpdateButton/DiveSiteUpdateButton';

const diveSite = props => (
    <div>
        <div>
            <DiveSiteImages />
            <DiveSiteDetails />
        </div>
        <div>
            <DiveSiteUpdateButton />
            <DiveSiteDescription />
        </div>
    </div>
);

export default diveSite;