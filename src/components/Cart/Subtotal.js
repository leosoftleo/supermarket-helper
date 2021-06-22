import React from 'react';

import { lowestPricesSum } from '../../helper/productData/productDataHelper';

export const Subtotal = ({ cartData }) => {
    return (
        <tr>
            <th></th><th></th><th>Subtotal: ${lowestPricesSum(cartData)}</th><th></th>
        </tr>
    )
}

export default Subtotal;