import React from 'react';
import PropTypes from 'prop-types';

import DiveSiteDetail from './DiveSiteDetail/DiveSiteDetail';
import DiveSiteQuality from './DiveSiteQuality/DiveSiteQuality';

const diveSiteDetails = props => {
    const { quality, bio_lvl, dangers, access, exp_lvl, tags, types } = props;
    return (
        <div className="DiveSiteDetails">
            <div className="DiveSiteDetails__container">
                <DiveSiteQuality quality={ quality } title={'Dive Quality'}/>
                <DiveSiteQuality quality={ bio_lvl } title={'Amount of Biology'}/>
                <DiveSiteDetail details={ dangers } title={'Dangers'}/>
                <DiveSiteDetail details={ access } title={'How to Access'}/>
                <DiveSiteDetail details={ exp_lvl } title={'Experience Level'}/>
                <DiveSiteDetail details={ tags } title={'Tags'}/>
                <DiveSiteDetail details={ types } title={'Categories'}/>
            </div>
        </div>
    )
}

diveSiteDetails.propTypes  = {
    access: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    })),
    bio_lvl : PropTypes.number,
    dangers: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    })),
    access: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    })),
    exp_lvl: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    })),
    tags: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    })),
    types: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }))
};

export default diveSiteDetails;