import React from 'react';
import DiveSiteImages from './DiveSiteImages/DiveSiteImages';
import DiveSiteDetails from './DiveSiteDetails/DiveSiteDetails';
import DiveSiteDescription from './DiveSiteDescription/DiveSiteDescription';
import DiveSiteUpdateButton from './DiveSiteUpdateButton/DiveSiteUpdateButton';
import DiveSiteMap from './DiveSiteMap/DiveSiteMap';

const diveSite = (props) => {
    return (
        <div className="DiveSite">
        <div className="DiveSite__container">
            <div className="DiveSite__main">
                <div className="DiveSite__title">
                    <span>This is the title</span>
                </div>
                <DiveSiteMap {...props}/>
                <DiveSiteImages />
                <DiveSiteDescription />
            </div>
            <div className="DiveSite__sidebar">
                <DiveSiteUpdateButton />
                <DiveSiteDetails />
            </div>
        </div>
    </div>
    )
};

export default diveSite;