import React from 'react';

const ProductDetailDesc = ({ description }) => {
    return (
        <div className="productdetails-description">
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
    )
}

export default ProductDetailDesc;