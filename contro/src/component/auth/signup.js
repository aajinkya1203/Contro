import React, { Component } from 'react'
import Navbar from './Navbar';
import signupBG from '../../images/3rdOne.svg';

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
        console.log(this.state);
    }
    render() {
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
                </form>
            </div>
        )
    }
}

export default signup
