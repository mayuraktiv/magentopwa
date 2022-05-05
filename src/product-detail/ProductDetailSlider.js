import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductDetailSlider = ({ media_gallery }) => {
    return (
        <div>
            <Carousel interval="5000" infiniteLoop transitionTime="1000">
                {media_gallery.images?.map((item, index) => (
                    <div className="image-wrapper" key={"product-img-"+index}>
                        <img src={item.url} alt="product_image" />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default ProductDetailSlider;