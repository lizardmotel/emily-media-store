import React from 'react';


function CartItem({item, value}) {

    const {id, title, img, price, total, count} = item;

    const {quantityChange, removeItem} = value;

    return (
        <div className='row my-2 text-capitalize text-center mb-5 align-items-center'>
            {/* removeButton */}
            <div className='col-10 mx-auto col-lg-2'>
                <div className='cart-icon' onClick={() => removeItem}>
                    <i  style={{fontSize: '1.8rem'}} className="fas fa-trash-alt"
                    onClick={() => removeItem(id)} />
                </div>
            </div>

            {/* image */}
            <div className='col-10 mx-auto col-lg-2'>
                <img src={img} alt='product'
                style={{width: '10rem', height: '15rem'}}
                className='img-fluid'
                />
            </div>

            {/* product title */}
            <div className='col-10 mx-auto col-lg-2' style={{fontSize: '1.6rem'}}>
                <span className='d-lg-none'>title: </span>{title}
            </div>

            { /* price */}
            <div className='col-10 mx-auto col-lg-2'>
                <span className='d-lg-none'>price: </span><span className='mr-1 dollar-sign'>$</span>{price}
            </div>

            {/* quantity buttons */}
            <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
                <div className='d-flex justify-content-center'>
                    <span className='btn btn-black mx-1'
                    onClick={() => (count === 1) ? null : quantityChange(id, -1)}>
                        <i className='fas fa-arrow-left' />
                    </span>

                    <span className='btn btn-black mx-1'>{count}</span>

                    <span className='btn btn-black mx-1'
                    onClick={() => quantityChange(id, 1)}>
                        <i className='fas fa-arrow-right' />
                    </span>
                </div>
            </div>

            {/* total */}
            <div className='col-10 mx-auto col-lg-2'>
                <span className='d-lg-none'>item total: </span><span className='mr-1 dollar-sign'>$</span>{total}
            </div>

        </div>
    )
}

export default CartItem;