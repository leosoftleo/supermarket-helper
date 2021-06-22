import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useDrop } from 'react-dnd';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { DND_ITEM_TYPES } from './../../constant';
import { addCart } from './../../actions/cartActions';

export const CartIcon = () => {
    const dispatch = useDispatch();

    // get cart data state
    const cartData = useSelector(state => state.cart);

    const [, drop] = useDrop(() => ({
        accept: DND_ITEM_TYPES.PRODUCT,
        drop: (item) => {
            dispatch(addCart(item));
        }
    }));

    return (
        <span ref={drop} className='fa-layers fa-fw'>
            <AiOutlineShoppingCart color='white' size='2em' />
            {cartData.length >= 1 ? <span className='fa-layers-counter fa-layers-bottom-right fa-3x'>{cartData.length}</span> : ''}
        </span>
    )
}

export default CartIcon;