import React from 'react';

const diveSiteDescription = props => {
    
    let descriptiontext = props.descriptiontext ?<span>{ props.descriptiontext }</span> : <span>Sorry, no description available. If you have information regarding this dive site, please submit your changes here.</span>
    
    return (
        <div className="DiveSiteDescription">
            <div className="DiveSiteDescription__container">
                <div className="DiveSiteDescription__heading">
                    <span>Description</span>
                </div>
                <div className="DiveSiteDescription__text">
                    { descriptiontext }
                </div>
            </div>
        </div>
        )
};

export default diveSiteDescription;