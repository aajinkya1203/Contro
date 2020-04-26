import React from 'react'
import { Link } from 'react-router-dom';
import SignedOutLinks from './SignedOutLinks';
import SignedInLinks from './SignedInLinks';

const Navbar=()=> {
    return (
        <nav className="nav-wrapper RootNavbar">
            {/* <img src= { smallCover } alt="Cover for Navbar"/> */}
            <div className="container">
                <Link to='/' className="brand-logo titleText" title="Contro - Not your usual Web Assistant!">Contro</Link>
                <SignedOutLinks />
                <SignedInLinks />
            </div>
        </nav>
    )
}

export default Navbar
