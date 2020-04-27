import React, { Component } from 'react'
import Navbar from './Navbar';
import signinBG from '../../images/4thOne.svg';

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
        console.log(this.state);
    }
    render() {
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
                </form>
            </div>
        )
    }
}

export default signin
