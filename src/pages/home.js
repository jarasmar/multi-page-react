import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="page home">
            <span className="title">El Campo de Olmo</span>
            <span className='subtitle'><Link to='/products'>Organic Farm</Link></span>
        </div>
    )
}

export default Home;