import React from 'react';
import star from '../../../../assets/markers/star.png';

const diveSiteQuality = props => {
    
    let qualityCount = [];
    
    for(let i = 0; i < props.quality ; i++){
        qualityCount.push((
                <img src={star} key={i}/>
        ))
    }
    
    return (
        <div className="DiveSiteDetail">
            <div className="DiveSiteDetail__container">
                <div className="DiveSiteDetail__title">
                    <span>{props.title}</span>
                </div>
                <ul className="DiveSiteDetail__list">
                    { qualityCount }
                </ul>
            </div>
        </div>
        )
};

export default diveSiteQuality;