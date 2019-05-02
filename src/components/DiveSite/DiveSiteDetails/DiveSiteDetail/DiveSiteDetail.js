import React from 'react';
import PropTypes from 'prop-types';

const diveSiteDetail = props => {
    let divesitedetails = null;
    
    if (props.details) {

        let transformedDetails = props.details ? Object.values(props.details)
                .map((detail, i) => {
                    return (
                        <li key={detail._id}>{detail.title}</li>
                    )
                }) : null;

        divesitedetails = (
            <div className="DiveSiteDetail">
            <div className="DiveSiteDetail__container">
                <div className="DiveSiteDetail__title">
                    <span>{ props.title }</span>
                </div>
                <ul className="DiveSiteDetail__list">
                    {transformedDetails}
                </ul>
            </div>
        </div>
        )
    }

    return (
        <div>
            {divesitedetails}
        </div>
    )
};

diveSiteDetail.propTypes = {
    title: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }))
}

export default diveSiteDetail;