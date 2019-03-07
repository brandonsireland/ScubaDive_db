import React from 'react';

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

export default diveSiteDetail;