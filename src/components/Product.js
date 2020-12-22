import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';


class Product extends Component {

    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
            <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
                <div className='card'>
                    <ProductConsumer>
                    {(value) => (
                        <div className='img-container p-5 pb-0' onClick={() => 
                        value.handleDetail(id)}>
                            <Link to='/details'>
                                <img src={img} alt='product' className='card-img-top' />
                            </Link>

                            <button className='cart-btn'
                            disabled={inCart}
                            onClick={() => value.addToCart(id)}>

                                {inCart?(<p className='text-capitalize mb-0' disabled>in cart</p>) : (<i className='fas fa-cart-plus' />)}

                            </button>
                    </div>
                    )}
                    
                    </ProductConsumer>

                    {/* Card Footer */}
                    <div className='card-footer d-flex justify-content-between'>
                        <p className='align-self-center mb-0'>{title}</p>
                        <h5 className='text-red font-italic mb-0'>
                            <span className='mr-1'>
                            <span className='dollar-sign'>$</span>
                            </span>
                            {price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
};


const ProductWrapper = styled.div`
.card {
    border-color: transparent;
    transition: all 0.5s linear;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
}
.card-footer{
    height: 50px;
    margin-top: auto;
    @media screen and (min-width: 768px) and (max-width: 1199px) {
        height: 50px;
    }
    @media screen and (max-width: 767px) {
        height: auto;
        font-size: 0.8em;    
    }
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
}
&:hover {
    .card {
        border: 0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer {
        background: rgba(244,244,244);
    }
}
.img-container {
    position: relative;
    overflow: hidden;
    max-height: 300px;
    text-align: center;
}

.card-img-top {
    transition: all 0.3s linear;
    object-fit: cover;
    height: 100%;
    @media screen and (max-width: 991px) {
        width: auto;
    }
}

.img-container:hover .card-img-top {
    transform: scale(1.3);
}
.cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background-color: var(--mainDark);
    border:none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(0, 100%);
    transition: all 0.3s linear;
}
.img-container:hover .cart-btn {
    transform: translate(0, 0);
}
.cart-btn:hover {
    background-color: var(--mainPurple);
    cursor: pointer;
}
`;

export default Product;