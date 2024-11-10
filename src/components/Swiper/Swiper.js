import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiper.css';

export default class Carrossel extends React.Component {
    render() {
        return (
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'3'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '', clickable: true }}
                Navigation={{
                    nextEl: 'swiper-button-next',
                    prevEl: 'swiper-button-prev',
                    clickable: true
                }}
                modules={[Navigation, Pagination, EffectCoverflow]}
                className='swiper-container'
            >
                <SwiperSlide className='slide-item'>
                    <img src={require('../ProjectsBlocks/images/1.png')} alt='Foto' />
                </SwiperSlide>

                <SwiperSlide className='slide-item'>
                    <img src={require('../ProjectsBlocks/images/2.png')} alt='Foto' />
                </SwiperSlide>

                <SwiperSlide className='slide-item'>
                    <img src={require('../ProjectsBlocks/images/3.png')} alt='Foto' />
                </SwiperSlide>

                <SwiperSlide className='slide-item'>
                    <img src={require('../ProjectsBlocks/images/1.png')} alt='Foto' />
                </SwiperSlide>

                <SwiperSlide className='slide-item'>
                    <img src={require('../ProjectsBlocks/images/2.png')} alt='Foto' />
                </SwiperSlide>

                <SwiperSlide className='slide-item'>
                    <img src={require('../ProjectsBlocks/images/3.png')} alt='Foto' />
                </SwiperSlide>

                <SwiperSlide className='slide-item'>
                    <img src={require('../ProjectsBlocks/images/1.png')} alt='Foto' />
                </SwiperSlide>

                <SwiperSlide className='slide-item'>
                    <img src={require('../ProjectsBlocks/images/2.png')} alt='Foto' />
                </SwiperSlide>

                <SwiperSlide className='slide-item'>
                    <img src={require('../ProjectsBlocks/images/3.png')} alt='Foto' />
                </SwiperSlide>

            </Swiper>
        );
    }
}