import React from 'react';

const diveSiteDetail = props => {

    return (
        <div className="DiveSiteDetail">
            <div className="DiveSiteDetail__container">
                <div className="DiveSiteDetail__title">
                    <span>{ props.title }</span>
                </div>
                <ul className="DiveSiteDetail__list">
                    <li>List item</li>
                    <li>List item</li>
                    <li>List item</li>
                </ul>
            </div>
        </div>
        )
};

export default diveSiteDetail;