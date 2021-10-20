import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Logo from "./logo";

function Nav(props) {
    return (
        <div className='nav'>
            <Logo />
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link> 
            </div>
        </div>
    )
}

export default withRouter(Nav);