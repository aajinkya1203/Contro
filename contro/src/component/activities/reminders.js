import React, { Component } from 'react';
import Navbar from '../auth/Navbar';
import { Link } from 'react-router-dom';
import CreateReminder from './reminderActs/CreateReminder';
import ViewReminder from './reminderActs/ViewReminder';
import { connect } from 'react-redux'
import { remindPerson } from '../../actions/reminderActions';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase'

class Reminders extends Component {
    state={
        decide:"create"
    }
    componentDidMount(){
        // setInterval(this.remindMe,2000);
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
      
        let comparison = 0;
        if (bandA > bandB) {
          comparison = 1;
        } else if (bandA < bandB) {
          comparison = -1;
        }
        return comparison;
    }
    doneReminder=()=>{
        console.log(this.state);
        var { reminders } = this.props
        reminders = reminders.sort(this.compare);
        let reminderToBeCompleted = reminders[0];
        // let reminderID = reminderToBeCompleted.id;
        // let remainingReminder = reminders.filter(reminder=>{
        //     return reminder.id!==reminderID
        // })
        // remainingReminder = remainingReminder.sort(this.compare);
        // let doneReminders = [...this.state.doneReminders, reminderToBeCompleted];
        // doneReminders = doneReminders.sort(this.compare);
        // this.setState({
        //     reminders:remainingReminder,
        //     doneReminders
        // })
        this.props.remindPerson(reminderToBeCompleted);

    }
    remindMe=()=>{
        const { reminders } = this.props
        reminders.sort(this.compare);
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
                    <div className="container todoContainer">
                        <h4 className="white-text text-darken-3">REMINDERS     | </h4>
                        <ul className="todoActs">
                            <li><Link onClick={()=>{this.handleDecide('create')}}>Upcoming Reminders</Link></li>
                            <li><Link onClick={()=>{this.handleDecide('view')}}>Completed Reminders</Link></li>
                        </ul>
                    </div>
                    <hr className="seperation" />
                    <CreateReminder compare={this.compare} reminders={reminders} remindMe={ this.remindMe } addReminder={ this.addReminder }/>
                </div>
            )
        }else{
            return (
                <div>
                    <Navbar />
                    <div className="container todoContainer">
                        <h4 className="white-text text-darken-3">REMINDERS     | </h4>
                        <ul className="todoActs">
                            <li><Link onClick={()=>{this.handleDecide('create')}}>Upcoming Reminders</Link></li>
                            <li><Link onClick={()=>{this.handleDecide('view')}}>Completed Reminders</Link></li>
                        </ul>
                    </div>
                    <hr className="seperation" />
                    <ViewReminder compare={this.compare} doneReminders={doneReminders}/>
                </div>
            )
        }
        
        
    }
}

const mapStateToProps=(state)=>{
    return{
        reminders:state.reminder.reminders,
        doneReminders:state.reminder.doneReminders
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        remindPerson: (reminderObj)=>dispatch(remindPerson(reminderObj))
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    // firestoreConnect((props)=>[
    //     {
    //         collection:''
    //     }
    // ])
    )(Reminders)
