import React, { Component } from 'react'
import Navbar from './Navbar';
import signinBG from '../../images/4thOne.svg';
import { signIN } from '../../actions/authActions'
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom'

class signin extends Component {
    state = {
        email:'',
        password:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log("submit!");
        this.props.signIN(this.state,this.props.firebase);
    }
    render() {
        const { authError,auth } = this.props;
        if(auth.uid) return <Redirect to="/home"/>
        return (
            <div className="">
                <Navbar />
                <form className="container" onSubmit={this.handleSubmit} id="signInForm">
                    <img src={ signinBG } alt="signinCover" className="signInFace"/>
                    <h4 className=" text-darken-3">Sign In</h4>
                    <div className="input-field white-text">
                        <label htmlFor="email">Email:</label>
                        <input id="email" type="email" onChange={this.handleChange} required className="white-text"/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password:</label>
                        <input id="password" type="password" onChange={this.handleChange} className="white-text" required/>
                    </div>

                    <div className="input-field">
                        <button className="btn z-depth-0 loginBtn">Log In</button>
                    </div>
                    { authError ? 
                        <div className="error container center red-text">
                            <p>{authError}</p>
                        </div>
                     : null
                     }
                </form>
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        signIN:(creds,fb)=>dispatch(signIN(creds,fb))
    }
}
const mapStateToProps=(state)=>{
    console.log(state)
    return{
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

export default withFirebase(connect(mapStateToProps, mapDispatchToProps)(signin))
