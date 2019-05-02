import React from 'react';
import DiveSiteDetails from './DiveSiteDetails/DiveSiteDetails';
import DiveSiteDescription from './DiveSiteDescription/DiveSiteDescription';
import DiveSiteUpdateButton from './DiveSiteUpdateButton/DiveSiteUpdateButton';
import DiveSiteMap from './DiveSiteMap/DiveSiteMap';
import Carousel from '../UI/Carousel/Carousel';

const diveSite = (props) => {
   
    return (
        <div className="DiveSite">
        <div className="DiveSite__container">
            <div className="DiveSite__main">
                <div className="DiveSite__title">
                    <span>{ props.loadedDiveSite.title }</span>
                </div>
                <DiveSiteMap {...props}/>
                <Carousel { ...props.loadedDiveSite.images }/>
                <DiveSiteDescription { ...props.loadedDiveSite }/>
            </div>
            <div className="DiveSite__sidebar">
                <DiveSiteUpdateButton updateChanges={ props.updateChanges }/>
                <DiveSiteDetails { ...props.loadedDiveSite }/>
            </div>
        </div>
    </div>
    )
};

export default diveSite;