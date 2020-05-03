import React, { Component } from 'react';
import Navbar from '../auth/Navbar';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import aboutBG from '../../images/DiffPageResources/aboutUs.svg'

class about extends Component{
    state={
        aboutDet : [
            {id:1,person:'Aajinkya Singh',github:'aajinkya1203', src:'aaPic.svg'},
            {id:2,person:'Afreen Siganporia',github:'afreenss', src:'aPic.svg'},
            {id:3,person:'Dhyey Sanghavi',github:'dhyeysanghavi', src:'dPic.svg'} 
        ]
    }
    render(){
        const  contributors  = this.state.aboutDet;
        const { auth } = this.props;
        if(!auth.uid) return <Redirect to='/' />
        return (
            <div>
                <Navbar />
                <img src={ aboutBG } alt="signinCover" className="scrollFace"/>
                <div className="container aboutContainer">
                    <ul>
                        {
                            contributors && contributors.map(contri=>{
                                return(
                                    <li key={ contri.id } className="card aboutCard z-depth-0">
                                        <div className="card-content">
                                            <img src = { require(`../../images/DiffPageResources/${ contri.src }`) }/>
                                            <h4>{ contri.person }</h4>
                                        </div>
                                        <p className="card-action lighten-4">
                                            Follow us on: 
                                            <a href={`https://github.com/${ contri.github }`}>
                                                <i className="fab fa-github"></i>
                                            </a>
                                        </p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
    
}
const mapStateToProps=(state)=>{
    return{
        auth:state.firebase.auth
    }
}

export default connect(mapStateToProps)(about)
