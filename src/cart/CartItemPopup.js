import React from 'react';
import classnames from 'classnames';
import ProName from '../product/ProName';
import ProImage from '../product/ProImage';
import Price from '../product/ProPrice';
import UpdateCart from './updateCart';
import DeleteCart from './deleteCart';

const CartItem = (props) => {
    const { cartItem } = props;
    return (
        <li className={classnames('cart_item', props.className)}>
            <div className="c_item_col">
                <div className="c_item_wrapper d-flex align-items-center">
                    <div className='c_item_image'>
                        <ProImage url_key={cartItem.product.url_key} url={cartItem.product.image.url} />
                    </div>
                    <div className="c_item_info">
                        <div className='c_name_price'>
                            <ProName>{cartItem.product.name}</ProName>
                            <Price prices={{ price: cartItem.prices.price.value }} />
                        </div>
                        <div className='c_qty'>
                            <UpdateCart item_uid={cartItem.uid} qty={cartItem.quantity} />
                        </div>
                    </div>
                </div>
            </div>
            <DeleteCart item_uid={cartItem.uid} />
        </li>
    );
}

export default CartItem;