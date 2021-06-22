import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { APP_NAME } from '../../constant';
import CartIcon from '../Cart/CartIcon';

export const NavBar = () => {
    return (
        <>
            <Navbar bg='primary' variant='dark'>
                <Navbar.Brand as={Link} to='/'>{APP_NAME}</Navbar.Brand>
                <Nav className='mr-auto'>
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/productTable'>Product Table</Nav.Link>
                    <Nav.Link as={Link} to='/cart'>Cart</Nav.Link>
                </Nav>
                <CartIcon />
            </Navbar>
        </>
    )
}

export default NavBar;