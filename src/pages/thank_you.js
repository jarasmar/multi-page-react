import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button';

function ThankYou(props) {
    const lastOrder = props.lastOrder;
    let listLastOrder = ''
    if (lastOrder) {
        listLastOrder = lastOrder.map((item) =>
            <li key={ item._id }>
                {item.qty} x {item.name}
            </li>
        )
    }
    
    return (
        <div className="page thank-you">
            { listLastOrder ? (
                <div className='thank-you-container'>
                    <span>Thanks for your order</span>
                    <ul className="last-order-list">
                        { listLastOrder }
                    </ul>
                    <Button 
                        text={<Link to='/products'>Back to Shop</Link>}
                        className='thank-you'
                    />
                </div>
            ) : (
                <Button 
                    text={<Link to='/products'>Back to Shop</Link>}
                    className='thank-you'
                />
            )}
        </div>
    )
}

export default ThankYou;