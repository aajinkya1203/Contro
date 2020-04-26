import React, { Component } from 'react';
import Navbar from '../auth/Navbar';
import peep from '../../images/additional/remasteredPeep.svg';
import ActivitySummary from '../activities/ActivitySummary';

class dashboard extends Component {
    render() {
        return (
            <div>
                <Navbar />
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

export default dashboard
