import React from 'react';
import { Link } from 'react-router-dom';

const SignedInLinks=()=> {
    return (
        <ul className="right signedOut">
            <li><Link to='/about'>ABOUT US</Link></li>
            <li><Link to='/'>LOG OUT</Link></li>
            <li><Link to='/profile' className="btn btn-floating white black-text">AS</Link></li>
        </ul>
    )
}

export default SignedInLinks
