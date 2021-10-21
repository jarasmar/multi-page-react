import React from 'react';
import { Link } from 'react-router-dom';
import  BasketList from '../components/basket_list'
import  Checkout from '../components/checkout'
import Button from '../components/button';

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
                    clearAfterCheckout={ props.clearAfterCheckout }
                />
                </div>
            ) : (
                <div className='empty-basket-container'>
                    <span>Your basket is empty</span>
                    <Button 
                        text={<Link to='/products'>Shop Here</Link>}
                        className='empty-basket'
                    />
                </div>
            )}
        </div>
    )
}

export default Basket;