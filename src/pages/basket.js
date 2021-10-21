import React from 'react';
import { Link } from 'react-router-dom';
import  BasketList from '../components/basketList'
import  Checkout from '../components/checkout'

function Basket(props) {
    const basketQty = props.basket.length;
    return (
        <div className="page basket">
            <div className="header">Basket</div>
            
            { (basketQty > 0 )? (
                <div className="full-basket">
                <BasketList 
                    basket={ props.basket } 
                    onClick={ props.onClick }
                    increaseQty={ props.increaseQty }
                    decreaseQty={ props.decreaseQty }
                />
                <Checkout 
                    basket={ props.basket }
                    itemsCount={ props.itemsCount }
                />
                </div>
            ) : (
                <div className='empty-basket'>
                    <span>Your basket is empty</span>
                    <button><Link to='/products'>Shop Here</Link></button>
                </div>
            )}
        </div>
    )
}

export default Basket;