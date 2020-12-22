import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../emily_cheers.png';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

class Navbar extends Component {

    render() {
        return (
            <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
                <Link to='/'>
                    <img src={logo} alt='store' style={logoCss} className='navbar-brand' />
                </Link>
                <ul className='navbar-nav align-items-center'>
                    <li className='nav-item ml-5'>
                        <Link to='/' className='nav-link'>
                            movies
                        </Link>
                    </li>
                </ul>
                <Link to='/store' className='ml-auto'>
                    <ButtonContainer>
                        my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const logoCss = {
    height: '50px',
    width: 'auto'
}

const NavWrapper = styled.nav`
    background: var(--mainDark);
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`;

export default Navbar;