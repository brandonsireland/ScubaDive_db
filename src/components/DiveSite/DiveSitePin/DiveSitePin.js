import React from 'react';
import PropTypes from 'prop-types';

import divepin from '../../../assets/markers/snorkel.png';

const pin = props => (
        <img src={divepin} style={{width: props.size}}/>
);

pin.propTypes = {
        size: PropTypes.number
};

export default pin;