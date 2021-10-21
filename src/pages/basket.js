import React from 'react';
import  BasketList from '../components/basketList'
import  Checkout from '../components/checkout'

function Basket(props) {
    return (
        <div className="page basket">
            <div className="header">Basket</div>
            <div className="content">
                <BasketList />
                <Checkout basketQty={ props.basketQty }/>
            </div>
            
        </div>
    )
}

export default Basket;