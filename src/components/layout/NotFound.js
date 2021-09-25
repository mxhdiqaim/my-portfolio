import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='not-found'>
            <h1>404</h1>
            <div>
                <p className='lead'>Page not found...</p>
                <Link to='/' className='bck-2-H'>Back to Home </Link>
            </div>
        </div>
    )
}


export default NotFound;