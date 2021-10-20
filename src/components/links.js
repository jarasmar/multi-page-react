import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Links() {
    return (
        <div className='links'> 
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
        </div>
    )
}

export default Links;