import React from 'react';

import DeleteBtn from './DeleteBtn';

export const Product = ({ product }) => {
    // find price object with lowest price
    const priceObject = product.prices.reduce((prev, curr) => parseFloat(prev.price) < parseFloat(curr.price) ? prev : curr, product.prices[0]);

    return (
        <>
            <tr>
                <th>{product.brand.en}</th>
                <th>{product.name.en}</th>
                <th>{priceObject.price} ({priceObject.supermarketCode})</th>
                <th><DeleteBtn product={product} /></th>
            </tr>
        </>
    )
}

export default Product;