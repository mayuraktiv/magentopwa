import React from 'react';
import classnames from 'classnames';
import updateCartApp from '../controllers/apps/updateCartApp';
import { connect } from 'react-redux';

class UpdateCart extends updateCartApp {
    render() {
        return (
            <div className={classnames('field qty', this.props.className)}>
                <div className="qty-input">
                    <button className='qty-count qty-count--minus' onClick={this.qtyMinus}>-</button >
                    <input type="number" name="qty" className='product-qty' value={this.props.qty}></input>
                    <button className='qty-count qty-count--add' onClick={this.qtyPlus}>+</button>
                </div>
            </div>
        );
    }
}

export default connect(updateCartApp.mapStateToProps, updateCartApp.mapDispatchToProps)(UpdateCart);