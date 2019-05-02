import React from 'react';
import PropTypes from 'prop-types';

const locationItem = props => (
    <li className="LocationItem" onClick={() => props.getDiveSites(props.id) }>
        <span>{props.title}</span>
        <span>{props.divesitecount} divesites!</span>
    </li>
);

locationItem.propTypes = {
    divesitecount: PropTypes.number.isRequired,
    getDiveSites: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}

export default locationItem;