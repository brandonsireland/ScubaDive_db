import React from 'react';
import DiveSiteDetail from './DiveSiteDetail/DiveSiteDetail';
import DiveSiteQuality from './DiveSiteQuality/DiveSiteQuality';

const diveSiteDetails = props => {
    console.log(props)
    // bio level, exp level, access, dangers, quality, tags, types,
    return (
        <div className="DiveSiteDetails">
            <div className="DiveSiteDetails__container">
                <DiveSiteQuality quality={props.quality} title={'Dive Quality'}/>
                <DiveSiteQuality quality={props.bio_lvl} title={'Amount of Biology'}/>
                <DiveSiteDetail title={'Dangers'}/>
                <DiveSiteDetail title={'How to Access'}/>
                <DiveSiteDetail title={'Experience Level'}/>
                <DiveSiteDetail title={'Tags'}/>
                <DiveSiteDetail title={'Catgeories'}/>
            </div>
        </div>
)
}

export default diveSiteDetails;