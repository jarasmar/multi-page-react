import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button';

function Home() {
    return (
        <div className="page home">
            <span className="title">El Campo de Olmo</span>
            <Button 
                text={ <Link to='/products'>Organic Farm</Link> }
                className='home-btn'
            />
        </div>
    )
}

export default Home;