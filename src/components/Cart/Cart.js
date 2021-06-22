import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import Product from './Product';
import Subtotal from './Subtotal';
import ClearBtn from './ClearBtn';

export const Cart = () => {
    // get cart data state
    const cart = useSelector(state => state.cart);

    return (
        <div>
            <ClearBtn className='py-3' />
            <Table className='px-3'>
                <thead className='product-table'>
                    <tr>
                        <th>Brand</th>
                        <th>Name</th>
                        <th>Price (Shop)</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cart?.map((item, index) => <Product key={index} product={item.data} />)}
                    {cart.length > 0 ? <Subtotal cartData={cart.map((item) => item.data)} /> : <tr></tr>}
                </tbody>
            </Table>
        </div>
    )
}

export default Cart;