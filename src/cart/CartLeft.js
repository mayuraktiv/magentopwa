import React, { useContext } from 'react';
import Price from '../product/ProPrice';
import ProImage from '../product/ProImage';
import ProName from '../product/ProName';
import CartContext from '../controllers/contexts/cart/cartContext';
import UpdateCart from './updateCart';
import DeleteCart from './deleteCart';

const CartLeft = () => {
    const { cart_details } = useContext(CartContext);
    return (
        <div className='cart-table-wrapper'>
            <table className='shopping-cart-table'>
                <thead>
                    <tr>
                        <th className='col item'>Product</th>
                        <th className='col price'>Price</th>
                        <th className='col qty'>Quantity</th>
                        <th className='col subtotal'>Subtotal</th>
                    </tr>
                </thead>
                <tbody className='cart-item'>
                    {cart_details.items.map(item => (
                        <tr className='item-info'>
                            <td className='col item'>
                                <ProImage url_key={item.product.url_key} url={item.product.image.url} />
                                <div className='product-item-details'>
                                    <ProName>{item.product.name}</ProName>
                                    <div className='product-item-action'>
                                        <span class="material-icons">mode_edit_outline</span>
                                        <DeleteCart item_uid={item.uid} qty={item.quantity} pageType="cart"/>
                                    </div>
                                </div>
                            </td>
                            <td className='col price'>
                                <Price prices={{ price: item.prices.price.value }} />
                            </td>
                            <td className='col qty'>
                                <UpdateCart item_uid={item.uid} qty={item.quantity} />
                            </td>
                            <td className='col subtotal'>
                                <Price prices={{ price: item.prices.row_total.value }}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CartLeft;