import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button';

function ThankYou(props) {
    return (
        <div className="page thank-you">
            <div className='thank-you-container'>
                <span>Thanks for your order</span>
                <Button 
                    text={<Link to='/products'>Shop Here</Link>}
                    className='thank-you'
                />
            </div>
        </div>
    )
}

export default ThankYou;