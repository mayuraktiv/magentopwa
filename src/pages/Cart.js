import React, { useContext } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import CartLeft from '../cart/CartLeft';
import CartRight from '../cart/CartRight';
import CartContext from '../controllers/contexts/cart/cartContext';
import '../style/partials/_editcart.scss';
import CartEmpty from '../cart/CartEmpty';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart_details } = useContext(CartContext);
    return (
        <div id="page_wrapper">
            <div className="editcart-page">
                <Header />
                <div id="maincontent" className="page-main">
                    {cart_details?.total_quantity > 0
                        ? <div className='frame'>
                            <div className='row justify-content-center page-title'>
                                <h4>Shopping Cart</h4>
                            </div>
                            <div className='row'>
                                <div className='col-des-8 col-tb-12 col-mb-12 cart-left-section'>
                                    <CartLeft />
                                    <div className='cart action'>
                                        <Link to="/" className='continue btn btn-default'><span>Continue Shopping</span></Link>
                                        <button className='update-cart btn btn-default'><span>Update Shopping Cart</span></button>
                                    </div>
                                </div>
                                <div className='col-des-4 col-tb-12 col-mb-12 cart-right-section'>
                                    <CartRight />
                                </div>
                            </div>
                        </div>
                        : <CartEmpty />
                    }
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Cart;