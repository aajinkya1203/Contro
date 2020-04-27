import React from 'react'
import reminderCheck from '../../../images/additional/reminderCheck.png';

const ActiveTodo=(props)=> {
    const { reminders } = props.reminders;
    reminders.sort(props.compare);
    const todoList = reminders.length ? (
        reminders.map(todo=>{
            return(
                <div className="card center" key={ todo.id }>
                    <div className="card-content">
                        <img src={ reminderCheck } alt="todoCheck" className="todoCheck"/>
                        <h4 className="card-title">Task: { todo.task }</h4>
                    </div>
                    <div className="card-action lighten-4 black-text">TO BE REMINDED ON: { todo.remindAt }</div>
                </div>
            )
        })
    ) : (
        
        <div className="center">
            <h4>You have no Pending Reminders!</h4>
        </div>
        
    );
    return (
        <div className="container todoViewContainer">
            <h5>Upcoming Reminders for Today:</h5>
            <div className="section">
                { todoList }
            </div>
        </div>
    )
}

export default ActiveTodo
