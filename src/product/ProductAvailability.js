import React, { Fragment } from 'react';

const ProductAvailability = ({ stock_status }) => {
    return (
        <Fragment>
            {stock_status === "IN_STOCK"
                ?
                <div className="stock available">
                    <strong>Availability:</strong>
                    <span>In stock</span>
                </div>
                :
                <div className="stock not_available">
                    <strong>Availability:</strong>
                    <span>Out of stock</span>
                </div>
            }
        </Fragment>
    )
}

export default ProductAvailability;