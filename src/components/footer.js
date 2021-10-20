import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Logo from "./logo";

function Footer() {
    return (
        <div className="footer">
            <Logo />
            <div className='links'> 
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className="footer-text">Privacy policy  |  Terms and conditions  |  ©Company 2021</div>
        </div>
    )
}

export default withRouter(Footer);