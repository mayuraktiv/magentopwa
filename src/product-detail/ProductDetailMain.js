import React from 'react';
import ProductDetailInfo from './ProductDetailInfo';
import ProductDetailSlider from './ProductDetailSlider';
import ProDetailTab from './productDetailTab';
import ProductWidget from '../product/ProductWidget'
import ShippingInfo from '../home/ShippingInfo';

const ProductDetailMain = ({ productDetail }) => {
    return (
        <div className="column main">
            <div className="frame">
                <div className='row'>
                    <div className="col-12 col-md-6">
                        <div className="product media">
                            <ProductDetailSlider media_gallery={productDetail.media_gallery}/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <ProductDetailInfo productDetail={productDetail}/>
                    </div>
                </div>
                <ProDetailTab productDetail={productDetail}/>
                <ProductWidget/>
                <div className='content-heading'>
                    <h3>DELIVERY & RETURNS</h3>
                    <p className="block-note">Custom static block for product detail</p>
                </div>
                <ShippingInfo/>
            </div>
        </div>
    )
}

export default ProductDetailMain;