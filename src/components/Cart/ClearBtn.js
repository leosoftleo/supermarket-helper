import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { clearCart } from '../../actions/cartActions';

export const ClearBtn = ({ className }) => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(clearCart());
    }

    return (
        <Container className={className}>
            <Button variant='primary' onClick={onClick}>Clear</Button>
        </Container>
    )
}

export default ClearBtn;