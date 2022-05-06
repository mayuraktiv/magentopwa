import React from 'react';
import classnames from 'classnames';

const FieldQty = (props) => {
    return (
        <div className={classnames('field qty', props.className)}>
            <div className="qty-input">
                <button className='qty-count qty-count--minus' onClick={props.qtyMinus}>-</button >
                <input type="number" name="qty" className='product-qty' value={props.qty}></input>
                <button className='qty-count qty-count--add' onClick={props.qtyPlus}>+</button>
            </div>
        </div>
    );
}

export default FieldQty;