import React from 'react';

const ProductSku = ({ sku }) => {
    return (
        <div className="product-sku">
            <strong>SKU:</strong>
            <span>{sku}</span>
        </div>
    )
}

export default ProductSku;
