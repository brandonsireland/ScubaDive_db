import React from 'react';

import divepin from '../../../assets/markers/snorkel.png';

const pin = props => (
        <img src={divepin} style={{width: props.size}}/>
);

export default pin;