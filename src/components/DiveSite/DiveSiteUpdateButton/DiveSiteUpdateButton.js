import React from 'react';
import Button from '../../UI/Button/Button';

const diveSiteUpdateButton = props => (
    <Button className="DiveSiteUpdateButton" click={props.updateChanges } >Submit Changes</Button>
);


export default diveSiteUpdateButton;