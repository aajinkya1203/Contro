import React from 'react'
import { Link } from 'react-router-dom';
import SignedOutLinks from './SignedOutLinks';
import SignedInLinks from './SignedInLinks';
import navbarBG from '../../images/additional/navbarBG.svg'
import { connect } from 'react-redux';

const Navbar=(props)=> {
    const { stopInterval } = props;
    const links = props.auth.uid ? <SignedInLinks stopInterval={ stopInterval}/>
     : <SignedOutLinks />;
    return (
        <nav className="nav-wrapper RootNavbar">
            <img src= { navbarBG } alt="Cover for Navbar" className="navbarBG"/>
            <div className="container">
                <Link to='/' className="brand-logo titleText" title="Contro - Not your usual Web Assistant!">Contro</Link>
                { links }
            </div>
        </nav>
    )
}
const mapStateToProps=(state)=>{
    return{
        auth:state.firebase.auth
    }
}
export default connect(mapStateToProps)(Navbar)
