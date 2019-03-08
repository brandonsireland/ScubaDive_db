import React from 'react';
import DiveSiteImages from './DiveSiteImages/DiveSiteImages';
import DiveSiteDetails from './DiveSiteDetails/DiveSiteDetails';
import DiveSiteDescription from './DiveSiteDescription/DiveSiteDescription';
import DiveSiteUpdateButton from './DiveSiteUpdateButton/DiveSiteUpdateButton';
import DiveSiteMap from './DiveSiteMap/DiveSiteMap';

const diveSite = (props) => {
//    console.log(props.loadedDiveSite.continent.title);
    return (
        <div className="DiveSite">
        <div className="DiveSite__container">
            <div className="DiveSite__main">
                <div className="DiveSite__title">
                    <span>{props.loadedDiveSite.title}</span>
                </div>
                <DiveSiteMap {...props}/>
                <DiveSiteImages />
                <DiveSiteDescription {...props.loadedDiveSite}/>
            </div>
            <div className="DiveSite__sidebar">
                <DiveSiteUpdateButton updateChanges={ props.updateChanges }/>
                <DiveSiteDetails {...props.loadedDiveSite}/>
            </div>
        </div>
    </div>
    )
};

export default diveSite;