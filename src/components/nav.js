import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Nav(props) {
    return (
        <div className='nav'>
            <span class="logo">Logo</span>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link> 
            </div>
        </div>
    )
}

export default withRouter(Nav);