import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { deleteCart } from '../../actions/cartActions';

export const DeleteBtn = ({ product }) => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(deleteCart(product));
    }

    return (
        <div>
            <Button variant='danger' onClick={onClick}>X</Button>
        </div>
    )
}

export default DeleteBtn;