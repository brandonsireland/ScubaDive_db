import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../UI/Button/Button';
import diveSite from '../DiveSite';

const diveSiteUpdateButton = props => (
    <Button className="DiveSiteUpdateButton" click={props.updateChanges } >Submit Changes</Button>
);

diveSiteUpdateButton.propTypes = {
    updateChanges: PropTypes.func.isRequired
};

export default diveSiteUpdateButton;