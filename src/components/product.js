import React from 'react';
import QtyController from './qtyController';
import Button from './button';

function Product(props) {
    return (
        <li>
            <span className="product-name">{ props.product.name }</span>
            <span className="product-price">£ { props.product.price }</span>
            { props.qty ? 
                <div className="qty-container">
                    <QtyController 
                        product={ props.product }
                        qty={ props.product.qty } 
                        increaseQty={ props.increaseQty } 
                        decreaseQty={ props.decreaseQty }
                    />
                    <Button 
                        text='Remove'
                        className='remove-btn'
                        onClick={ () => props.onClick(props.product) }
                    />
                </div>
                
            : <Button 
                text='Buy'
                className='buy-btn'
                onClick={ () => props.onClick(props.product) }
            />}
            
        </li>
    )
}

export default Product;