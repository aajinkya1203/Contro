import React from 'react'
import reminderCheck from '../../../images/additional/reminderCheck.png';
import moment from 'moment';

const ViewReminder=(props)=> {
    const { doneReminders } = props;
    [...doneReminders].sort(props.comparison);
    console.log([...doneReminders].sort(props.comparison));
    const reminderList = doneReminders.length ? (
        doneReminders.map(todo=>{
            return(
                <div className="card center" key={ todo.id }>
                    <div className="card-content">
                        <img src={ reminderCheck } alt="reminderCheck" className="todoCheck"/>
                        <h4 className="card-title">Task: { todo.task }</h4>
                    </div>
                    <div className="card-action lighten-4 black-text">REMINDER ON: { moment(todo.remindedOn.toDate()).fromNow() }</div>
                </div>
            )
        })
    ) : (
        
        <div className="center">
            <h4>You have no Reminders completed!</h4>
        </div>
        
    );
    return (
        <div className="container todoViewContainer">
            <h5>All completed Reminders:</h5>
            <div className="section">
                { reminderList }
            </div>
        </div>
    )
}

export default ViewReminder