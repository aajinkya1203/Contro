import React from 'react';
import coverBG from '../../images/cover.svg';
import { Link } from 'react-router-dom';
import Features from './Features';
import followFinal from '../../images/followFinal.svg';

const IndexPage=()=> {
    return (
        <div className="container">
            <div className="container intro">
                <h3>Contro</h3>
                <h5><i>Not your usual Web Assistant!</i></h5>
                <img src={ coverBG } alt="Cover" />
                <div className="input-field">
                    <Link to='/signin' title="Sign in to your account" className="white-text">Sign In</Link>
                </div>
                <div className="input-field">
                    <Link to='/signup' title="Create your own account!" className="white-text">Sign Up</Link>
                </div>
            </div>

            <br />
            <hr className="seperation"/>
            <br />
            <Features />
            <br />
            <hr className="seperation"/>
            <br />

            <footer id="socialID" className="socialClass">
                <h1>
                    Made with <span role="img" aria-label="heart">❤️</span>
                </h1>
                <img src={ followFinal } alt="Follow svg" />
                <h3 id="typewrite">console.log("Follow us on");</h3>
                <ul>
                    <li>
                        <a href="https://github.com/aajinkya1203" target="Follow us on github!" id="githubDiv"><i className="fab fa-github"></i></a>
                    </li>
                </ul>

                <h3 className="copyright">
                    © 2020 Contro, Mumbai.
                </h3>
    
            </footer>
        </div>
    )
}

export default IndexPage
