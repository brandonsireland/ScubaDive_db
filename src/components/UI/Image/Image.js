import React from 'react';

import demoImage from '../../../assets/placeholders/placeholder-image.png';

const image = props => {
    let src = props.src ? props.src : demoImage;

    return (
        <img className='Image' src={src} / >
    )
}

export default image;