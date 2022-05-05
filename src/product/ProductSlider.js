import React from 'react';
import classnames from 'classnames';
import Swiper from 'react-id-swiper';
import { Navigation } from 'swiper';


import ProBox from './Probox';

export default class ProductSlider extends React.Component {
    render() {
        const totalItems = 20;
        const items = new Array(totalItems).fill(null);

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
            <div className={classnames('product_slider', this.props.className)}>
                {(this.props.params.type === 0 || this.props.params.type === 1) &&
                    <div className="product_slider_row">
                        <Swiper {...params}>
                            {items.map((_, idx) => <div className="product_slide_row" key = {idx}>
                                <ProBox params={{ type: 'grid' }}></ProBox>
                            </div>)}
                        </Swiper>
                    </div>
                }

            </div>
        );
    }
}