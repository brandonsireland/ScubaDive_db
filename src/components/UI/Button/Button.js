import React from 'react';

const button = (props) => (
    <button className="Button" onClick={ props.click }>{ props.children }</button>
);

export default button;