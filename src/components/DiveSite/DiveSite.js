import React from 'react';
import PropTypes from 'prop-types';

import DiveSiteDetails from './DiveSiteDetails/DiveSiteDetails';
import DiveSiteDescription from './DiveSiteDescription/DiveSiteDescription';
import DiveSiteUpdateButton from './DiveSiteUpdateButton/DiveSiteUpdateButton';
import DiveSiteMap from './DiveSiteMap/DiveSiteMap';
import Carousel from '../UI/Carousel/Carousel';

const diveSite = (props) => {
  const { loadedDiveSite, updateChanges } = props;
    console.log(props)
    return (
        <div className="DiveSite">
        <div className="DiveSite__container">
            <div className="DiveSite__main">
                <div className="DiveSite__title">
                    <span>{ loadedDiveSite.title }</span>
                </div>
                <DiveSiteMap {...props}/>
                <Carousel { ...loadedDiveSite.images }/>
                <DiveSiteDescription { ...loadedDiveSite.description }/>
            </div>
            <div className="DiveSite__sidebar">
                <DiveSiteUpdateButton updateChanges={ updateChanges }/>
                <DiveSiteDetails { ...loadedDiveSite }/>
            </div>
        </div>
    </div>
    )
};

diveSite.propTypes = {
    viewport: PropTypes.func.isRequired,
    loadedDiveSite: PropTypes.object.isRequired,
    updateChanges: PropTypes.func.isRequired,
    viewport: PropTypes.object.isRequired
}
export default diveSite;