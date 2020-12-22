import React, {Component} from 'react';
import { ProductConsumer } from '../../context';
import { Link } from 'react-router-dom';

class CartTotals extends Component {

    render() {

        return (
            <ProductConsumer>
                {value => {
                    const {cartTotal } = value;

                    return (
                        <React.Fragment>
                        <div className='container'>
                        <div className='row'>
                            <div className='col-10 mx-auto mt-4 col-sm-8 text-capitalize text-center'>
                            <Link to='/'>
                                <button className='btn btn-outline-danger text-uppercase mb-3 px-5'
                                type='button'
                                onClick={() => value.clearCart()}>
                                    <i className='fas fa-coins'/> checkout <i className='fas fa-coins'/>
                                    <br></br>
                                    <span className='dollar-sign'>$</span> {cartTotal}
                                </button>
                            </Link>
                            
                            </div>
                        </div>
                        </div>
                        </React.Fragment>
                    )
                }}
            </ProductConsumer>
        )
    }
}

export default CartTotals;