import React from 'react';
import DiveSiteImages from './DiveSiteImages/DiveSiteImages';
import DiveSiteDetails from './DiveSiteDetails/DiveSiteDetails';
import DiveSiteDescription from './DiveSiteDescription/DiveSiteDescription';
import DiveSiteUpdateButton from './DiveSiteUpdateButton/DiveSiteUpdateButton';

const diveSite = props => (
    <div className="DiveSite">
        <div className="DiveSite__container">
            <div className="DiveSite__main">
                <DiveSiteImages />
                <DiveSiteDescription />
            </div>
            <div className="DiveSite__sidebar">
                <DiveSiteUpdateButton />
                <DiveSiteDetails />
            </div>
        </div>
    </div>
);

export default diveSite;