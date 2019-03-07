import React from 'react';
import DiveSiteDetail from './DiveSiteDetail/DiveSiteDetail';
import DiveSiteQuality from './DiveSiteQuality/DiveSiteQuality';

const diveSiteDetails = props => {
    return (
        <div className="DiveSiteDetails">
            <div className="DiveSiteDetails__container">
                <DiveSiteQuality quality={props.quality} title={'Dive Quality'}/>
                <DiveSiteQuality quality={props.bio_lvl} title={'Amount of Biology'}/>
                <DiveSiteDetail details={props.dangers} title={'Dangers'}/>
                <DiveSiteDetail details={props.access} title={'How to Access'}/>
                <DiveSiteDetail details={props.exp_lvl} title={'Experience Level'}/>
                <DiveSiteDetail details={props.tagss} title={'Tags'}/>
                <DiveSiteDetail details={props.types} title={'Categories'}/>
            </div>
        </div>
)
}

export default diveSiteDetails;