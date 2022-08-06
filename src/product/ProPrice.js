import React from 'react';
import CurrencySymbol from '../common/CurrencySymbol';

const Price = ({ prices }) => {
    return (
        <div className='price_row'>
            {/* <div className="cutprice_off_row">
                    {(this.props.params.type === 0 || this.props.params.type === 1 || this.props.params.type === 2) &&
                        <span className="cut_price"><CurrencySymbol /> 2190.00 </span>
                    }
                </div> */}
            <div className="main_price">
                <span><CurrencySymbol />{prices.price}</span>
            </div>
        </div>
    );
}

export default Price