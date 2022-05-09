import React from 'react';
import classnames from 'classnames';
import Swiper from 'react-id-swiper';
import { Navigation } from 'swiper';
import ProBox from './Probox';

const ProductSlider = (props) => {
    const params = {
        modules: [Navigation],
        slidesPerView: 6,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            390: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    }

    return (
        <div className={classnames('product_slider', props.className)}>
            <div className="product_slider_row">
                <Swiper {...params}>
                    {props.product_skus?.map(sku => (
                        <div className="product_slide_row" key={"product-" + sku}>
                            <ProBox sku={sku} type='grid'></ProBox>
                        </div>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default ProductSlider;