import React, { Component } from 'react'
import Navbar from './Navbar';
import signupBG from '../../images/3rdOne.svg';
import { signUP } from '../../actions/authActions'
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom'

class signup extends Component {
    state = {
        email:'',
        password:'',
        fname:'',
        lname:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log("submit!");
        this.props.signUP(this.state,this.props.firebase);
        this.setState({
            email:'',
            password:'',
            fname:'',
            lname:''
        })
    }
    render() {
        const { authError, auth } = this.props;
        if(auth.uid) return <Redirect to="/home"/>

        return (
            <div className="">
                <Navbar />
                <form className="container" onSubmit={this.handleSubmit} id="signInForm">
                    <img src={ signupBG } alt="signupCover" className="signInFace"/>
                    
                    <h4 className=" text-darken-3">Sign Up</h4>
                    <div className="input-field">
                        <label htmlFor="fname">First Name:</label>
                        <input id="fname" className="white-text" type="text" onChange={this.handleChange} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lname">Last Name:</label>
                        <input id="lname" className="white-text" type="text" onChange={this.handleChange} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email:</label>
                        <input id="email" className="white-text" type="email" onChange={this.handleChange} required/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password:</label>
                        <input id="password" className="white-text" type="password" onChange={this.handleChange} required/>
                    </div>

                    <div className="input-field">
                        <button className="btn z-depth-0 loginBtn">CREATE !</button>
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
        signUP:(creds,fb)=>dispatch(signUP(creds,fb))
    }
}
const mapStateToProps=(state)=>{
    console.log(state)
    return{
        auth: state.firebase.auth,
        authError:state.auth.authError
    }
}

export default withFirebase(connect(mapStateToProps,mapDispatchToProps)(signup))
