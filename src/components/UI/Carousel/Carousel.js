import React from 'react';
import Swiper from 'react-id-swiper';
import { Pagination, Navigation } from 'swiper/dist/js/swiper.esm'
import 'react-id-swiper/src/styles/css/swiper.css';
import Image from '../Image/Image';

const carousel = props => {
console.log(props)
    let carouselItems = props ?
        Object.keys(props)
            .map(imageKey => {
                return  (
                <div key={imageKey}>
                    <Image src={ imageKey.src } />
                </div>
                )
            }) :
            (
                <div>
                    <span>Sorry, no images available at the moment</span>
                </div>
            );

    const params = {
        modules: [Pagination, Navigation],
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        loop: true,
        slidesPerView: 3
      };

    return (
        <Swiper { ...params }>
            { carouselItems }
        </Swiper>
    )   
};

export default carousel;