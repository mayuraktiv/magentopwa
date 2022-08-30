import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import WishList from './WishList';
import ProName from './ProName';
import Price from './ProPrice';
import AddToCart from './AddToCart';
import ProImage from './ProImage';

const ProGridBoxWishlist = ({ productData }) => {
console.log(productData,"productData")
        return (
            <div className={classnames('product_grid_box product_col')}>
                <div className="product_grid_image">
                    <ProImage/>
                {/* <ProImage url_key={productData.url_key} url={productData.media_gallery.thumbnail.url}></ProImage> */}
                <WishList className="wish_active" />
                {/* <AddToCart sku={productData.sku} pageType="product_list" /> */}
                </div>
                <div className="product_grid_content">
                {/* <ProName url_key={productData.url_key}>{productData.name}</ProName> */}
                <ProName />

                <AddToCart />

                    <div className="grid_price_block">
                    {/* <Price prices={productData.prices}></Price> */}
                    </div>
                    <div className='field comment-box'>
                    <label className="label">
                        <span>Comment</span>
                    </label>
                    <div class="control">
                        <textarea placeholder="Comment" title="Comment" class="product-item-comment"></textarea>
                    </div>
                    </div>
                    <div className='field qty'>
                        <div className="qty-input">
                            <input type="number" name="qty" className='product-qty' value='1'></input>
                        </div>
                    </div>
                    <div className='product-item-action'>
                        <a className='action edit-btn'><span></span></a>
                        <a className='action delete-btn'><span></span></a>
                    </div> 
                </div>
            </div >
        );
}

export default ProGridBoxWishlist;