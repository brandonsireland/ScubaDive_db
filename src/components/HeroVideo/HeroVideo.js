import React from 'react';
import HeroVideo from '../../assets/video/hero.mp4';


const heroVideo = () => (
    <div className="HeroVideo">
        <div className="HeroVideo__container">
            <video autoPlay loop muted src={ HeroVideo } type="video/mp4">
            </video>
            <div className="HeroVideo__heading">
                <span>The Worlds most Comprehensive Dive Site Database.</span>
            </div>
        </div>
    </div>
)

export default heroVideo;