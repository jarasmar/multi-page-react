import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Nav(props) {
    return (
        <div className='nav'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default withRouter(Nav);