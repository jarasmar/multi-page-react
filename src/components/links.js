import React from 'react';
import { Link } from 'react-router-dom';

function Links(props) {
    const basketQty = props.basketQty > 0 ? ('(' + props.basketQty + ') ') : '';
    return (
        <div className='links'> 
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/basket'>{ basketQty }Basket</Link>
        </div>
    )
}

export default Links;