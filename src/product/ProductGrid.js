import React from 'react';
import ProName from './ProName';
import Price from './ProPrice';
import AddToCart from './AddToCart';
import WishList from './WishList';
import ProImage from './ProImage';

const ProGridBox = ({ productData }) => {
    return (
        <div className='product_grid_box product_col'>
            <div className="product_grid_image">
                <ProImage url_key={productData.url_key} url={productData.media_gallery.thumbnail.url}></ProImage>
                <WishList className="wish_active" />
                <AddToCart sku={productData.sku} pageType="product_list" />
            </div>
            <div className="product_grid_content">
                <ProName url_key={productData.url_key}>{productData.name}</ProName>
                <div className="grid_price_block">
                    <Price prices={productData.prices}></Price>
                </div>
            </div>
        </div >
    );
}

export default ProGridBox;