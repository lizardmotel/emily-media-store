import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

class Details extends Component {

    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {id,img,info,price,title,inCart, cast} = value.detailProduct;
                    const castMembers = cast.map(name => <li className='mt-1 text-capitalize'>{name}</li>);
                    return (
                        
                        <div className="container py-5">
                            {/* Title */}
                            <div className='row'>
                                <div style={{color: 'var(--mainRed)'}}className='col-10 mx-auto text-center text-slanted my-5'>
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* End Title */}
                            {/* Product Info */}
                            <div className='row'>
                                <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                                    <img src={img} style={{maxHeight: '500px'}} className='img-fluid' alt='product'/>
                                </div>
                                <div className='col-10 mx-auto col-md-6 my-3'>
                                    <h2 className='text-uppercase'>Description</h2>
                                    <p className='mt-3 mb-0'>{info}</p>

                                    <h3 className='mt-3'>Cast</h3>
                                    <ul className='mt-1' type='none'>{castMembers}</ul>

                                    <h4 className={inCart ? 'text-muted lead mt-5' : 'mt-5'}>
                                        <strong>
                                            price: <span>$</span>{price}
                                        </strong>
                                    </h4>
                                    {/* Button */}
                                    
                                    <div>
                                        <Link to='/'>
                                        <ButtonContainer>
                                            back to products
                                        </ButtonContainer>
                                        </Link>
                                        <Link to='/store'>
                                        <ButtonContainer
                                            cart
                                            disabled={inCart} onClick={() => {
                                            value.addToCart(id)
                                        }}>
                                            {inCart ? 'in Cart' : 'buy now'}
                                        </ButtonContainer>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}

export default Details;