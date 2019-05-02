import React from 'react';
import PropTypes from 'prop-types';

const diveSiteDescription = props => {

    let descriptionText = props.description ?<span>{ props.description }</span> : <span>Sorry, no description available. If you have information regarding this dive site, please submit your changes.</span>
    
    return (
        <div className="DiveSiteDescription">
            <div className="DiveSiteDescription__container">
                <div className="DiveSiteDescription__heading">
                    <span>Description</span>
                </div>
                <div className="DiveSiteDescription__text">
                    { descriptionText }
                </div>
            </div>
        </div>
        )
};

diveSiteDescription.propTypes = {
    description: PropTypes.string
};

export default diveSiteDescription;