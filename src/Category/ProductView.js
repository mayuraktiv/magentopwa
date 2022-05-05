import classNames from 'classnames';
import React, { Fragment, useState } from 'react';
import ProBox from '../product/Probox';

const ProductView = (props) => {
    const [gridCls, setGridCls] = useState('grid__product--four-product');
    console.log("ProductView---->", props);
    const product_skus = [...props.product_skus, ...props.product_skus_loadmore];
    return (
        <div className='product-view'>
            {props.view === "list" &&
                <div className="product-list-view">
                    <div className="product-list">
                        {product_skus?.map(sku => (
                            <Fragment key={"product-"+sku}>
                                <ProBox type={props.view} sku={sku}></ProBox>
                            </Fragment>
                        ))}
                    </div>
                </div>
            }
            {props.view === "grid" &&
                <div className={classNames('grid__product', gridCls)} >
                    <div className="grid-view-btn">
                        <button type="button" className="test four" onClick={() => setGridCls('grid__product--four-product')}>four</button>
                        <button type="button" className="test three" onClick={() => setGridCls('grid__product--three-product')}>three</button>
                        <button type="button" className="test two" onClick={() => setGridCls('grid__product--two-product')}>two</button>
                    </div>
                    <div className="product-grid">
                        {product_skus?.map(sku => (
                            <div className="product_slide_row" key={"product-"+sku}>
                                <ProBox type={props.view} sku={sku}></ProBox>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div>
    );
}

export default ProductView;