import React from 'react';
import Price from '../product/ProPrice';
import ProDes from '../product/ProductDes';
import AddToCart from '../product/AddToCart';
import WishList from '../product/WishList';
// import FieldQty from '../product/FieldQty';
import ProductAvailability from '../product/ProductAvailability';
import ProductSku from '../product/ProductSku';

const ProductDetailInfo = ({ productDetail }) => {
    return (
        <div className="product-info-main">
            <div className='product_name'>
                <h6 dangerouslySetInnerHTML={{ __html: productDetail.name }}></h6>
            </div>
            <Price prices={productDetail.prices}></Price>
            <ProDes />
            <div className="actions-link d-flex">
                <AddToCart sku={productDetail.sku} pageType="product_detail"/>
                <WishList className="wish_active" />
            </div>
            <div className="product-info-stock-sku">
                <ProductAvailability stock_status={productDetail.stock_status}/>
                <ProductSku sku={productDetail.sku}/>
            </div>
        </div>
    )
}

export default ProductDetailInfo;