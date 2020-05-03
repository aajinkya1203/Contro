import React from 'react';
import { Link } from 'react-router-dom';
import {signOUT} from '../../actions/authActions'
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase'

const SignedInLinks=(props)=> {
    const { profile } = props;
    return (
        <ul className="right signedOut">
            <li><Link to='/about'>ABOUT US</Link></li>
            <li><Link to='/' onClick={()=>props.signOUT(props.firebase)}>LOG OUT</Link></li>
            <li><Link to='/profile' className="btn btn-floating white black-text">{profile.initials}</Link></li>
        </ul>
    )
}
const mapStateToProps = (state)=>{
    return{
        profile:state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        signOUT:(fb)=>dispatch(signOUT(fb))
    }
}
export default withFirebase(connect(mapStateToProps,mapDispatchToProps)(SignedInLinks))
