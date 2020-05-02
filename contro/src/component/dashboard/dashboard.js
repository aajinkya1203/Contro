import React, { Component } from 'react';
import Navbar from '../auth/Navbar';
import peep from '../../images/additional/remasteredPeep.svg';
import ActivitySummary from '../activities/ActivitySummary';
import homeBG from '../../images/additional/homeBG.svg';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class dashboard extends Component {
    render() {
        const { auth } = this.props;
        console.log(auth)
        if(!auth.uid) return <Redirect to='/'/>
        return (
            <div>
                <Navbar />
                <img src ={ homeBG } alt="homeBG" className="homeBG"/>
                <div id="main">
                    <img src = { peep } alt="Guy Peeping" className="peep" />
                    <div id="tabs">
                        <h3 className="instruction">
                            Hello Aajinkya, <br/>
                            What would you like to do?
                        </h3>
                        <ActivitySummary />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(dashboard)
