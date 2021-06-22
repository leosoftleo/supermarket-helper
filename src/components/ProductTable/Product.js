import React from 'react';
import { useDrag } from 'react-dnd';

import { DND_ITEM_TYPES } from './../../constant';

export const Product = ({ product }) => {
    // compare object price code and target price code
    const comparePriceCode = (supermarketCode) => {
        return (priceObject) => {
            return priceObject.supermarketCode === supermarketCode;
        }
    }

    const [, drag] = useDrag({
        type: DND_ITEM_TYPES.PRODUCT,
        item: { data: product }
    });

    return (
        <>
            <tr ref={drag}>
                <th>{product.brand.en}</th>
                <th>{product.name.en}</th>
                <th>{product.prices.find(comparePriceCode('WELLCOME'))?.price || '-'}</th>
                <th>{product.prices.find(comparePriceCode('PARKNSHOP'))?.price || '-'}</th>
                <th>{product.prices.find(comparePriceCode('JASONS'))?.price || '-'}</th>
                <th>{product.prices.find(comparePriceCode('WATSONS'))?.price || '-'}</th>
                <th>{product.prices.find(comparePriceCode('AEON'))?.price || '-'}</th>
                <th>{product.prices.find(comparePriceCode('DCHFOOD'))?.price || '-'}</th>
            </tr>
        </>
    )
}

export default Product;