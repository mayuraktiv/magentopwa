import React from 'react';
import ProName from './ProName';
import AddToCart from './AddToCart';
import WishList from './WishList';
import ProImage from './ProImage';
import Price from './ProPrice';
import ProDes from './ProductDes';

const ProductList = ({ productData }) => {

    return (
        <div className='row'>
            <div className="col-des-3 col-tb-4 col-mb-12 product_list_image">
                <ProImage url={productData.media_gallery.thumbnail.url}></ProImage>
            </div>
            <div className="col-des-9 col-tb-8 col-mb-12 product_list_content">
                <div className="product_info_col">
                    <ProName>{productData.name}</ProName>
                    <Price prices={productData.prices}></Price>
                    {productData.short_description &&
                        <ProDes description={productData.short_description} />
                    }
                    <div className="actions-link d-flex">
                        <AddToCart sku={productData.sku} pageType="product_list" />
                        <WishList className="wish_active" />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ProductList;