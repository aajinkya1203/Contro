import React, { Component } from 'react';
import Navbar from '../auth/Navbar';
import { Link } from 'react-router-dom';
import CreateReminder from './reminderActs/CreateReminder';
import ViewReminder from './reminderActs/ViewReminder';
import { connect } from 'react-redux'
import { remindPerson } from '../../actions/reminderActions';
import { compose } from 'redux';
import reminderPageCover from '../../images/DiffPageResources/reminderPageCover.svg';
import { firestoreConnect, isLoaded, withFirebase } from 'react-redux-firebase'

class Reminders extends Component {
    state={
        decide:"create"
    }
    componentDidMount(){
        setInterval(this.remindMe,2000);
    }
    handleDecide=(dec)=>{
        this.setState({
            decide: dec
        })
    }
    addReminder=(reminder)=>{
        reminder.id=Math.random();
        let tempReminder = [...this.state.reminders,reminder];
        tempReminder = tempReminder.sort(this.compare);
        this.setState({
            reminders:tempReminder
        })
    }
    compare(a, b) {
        const bandA = a.remindAt;
        const bandB = b.remindAt;
      
        let comparison;
        if (bandA > bandB) {
          comparison = 1;
        } else if (bandA < bandB) {
          comparison = -1;
        }
        return comparison;
    }
    comparison(a, b){
        var bandA = a.remindedOn.toDate();
        bandA = ("0"+bandA.getHours()).slice(-2)+":"+("0"+bandA.getMinutes()).slice(-2);
        var bandB = b.remindedOn.toDate();
        bandB = ("0"+bandB.getHours()).slice(-2)+":"+("0"+bandB.getMinutes()).slice(-2);
        
        let comparison;
        if (bandA > bandB) {
          comparison = 1;
        } else if (bandA < bandB) {
          comparison = -1;
        }
        return comparison;
    }
    doneReminder=()=>{
        console.log(this.state);
        var { reminders } = this.props;
        [...reminders].sort(this.compare);
        let reminderToBeCompleted = reminders[0];
        this.props.remindPerson(reminderToBeCompleted.id,this.props.firebase);

    }
    remindMe=()=>{
        const { reminders } = this.props;
        [...reminders].sort(this.compare);
        if(reminders.length===0){
            return null;
        }
        let a = new Date();
        a = ("0"+a.getHours()).slice(-2)+":"+("0"+a.getMinutes()).slice(-2);
        console.log(a);
        if(reminders[0].remindAt.toString()<=a){
            this.doneReminder();
        }
    }

    render() {
        const { reminders, doneReminders } = this.props;
        if(this.state.decide==="create"){
            return (
                <div>
                    <Navbar />
                    <img src = {reminderPageCover} alt="ReminderPageCover" className="scrollFace reminderFace"/>
                    <div className="container todoContainer">
                        <h4 className="white-text text-darken-3">REMINDERS     | </h4>
                        <ul className="todoActs">
                            <li><Link onClick={()=>{this.handleDecide('create')}}>Upcoming Reminders</Link></li>
                            <li><Link onClick={()=>{this.handleDecide('view')}}>Completed Reminders</Link></li>
                        </ul>
                    </div>
                    <hr className="seperation" />
                    {
                        isLoaded(reminders)?
                        <CreateReminder compare={this.compare} reminders={reminders} remindMe={ this.remindMe } addReminder={ this.addReminder }/>
                        : null
                    }
                </div>
            )
        }else{
            return (
                <div>
                    <Navbar />
                    <img src = {reminderPageCover} alt="ReminderPageCover" className="scrollFace reminderFace"/>
                    <div className="container todoContainer">
                        <h4 className="white-text text-darken-3">REMINDERS     | </h4>
                        <ul className="todoActs">
                            <li><Link onClick={()=>{this.handleDecide('create')}}>Upcoming Reminders</Link></li>
                            <li><Link onClick={()=>{this.handleDecide('view')}}>Completed Reminders</Link></li>
                        </ul>
                    </div>
                    <hr className="seperation" />
                    {
                        isLoaded(doneReminders)?
                        <ViewReminder comparison={this.comparison} doneReminders={doneReminders}/>
                        : null
                    }
                </div>
            )
        }
        
        
    }
}

const mapStateToProps=(state,ownProps)=>{
    console.log(ownProps);
    return{
        // reminders:state.reminder.reminders,
        // doneReminders:state.reminder.doneReminders,
        reminders:state.firestore.ordered.reminders,
        doneReminders:state.firestore.ordered.doneReminders,
        auth:state.firebase.auth
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        remindPerson: (reminderObj,fb)=>dispatch(remindPerson(reminderObj,fb))
    }
}

export default withFirebase(compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect((props)=>[
        {
            collection:'allReminder',
            doc:`${props.auth.uid}`,
            subcollections:[
                { collection:'reminders' }
            ],
            storeAs:'reminders'
        },
        {
            collection:'allReminder',
            doc:`${props.auth.uid}`,
            subcollections:[
                { collection:'doneReminders' }
            ],
            storeAs:'doneReminders'
        }
    ])
    )(Reminders))
