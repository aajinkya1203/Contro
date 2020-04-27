import React, { Component } from 'react';
import ActiveReminder from './ActiveReminder';

class CreateTodo extends Component {
    state={
        id:null,
        task:'',
        status:'false',
        remindAt:null
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addReminder(this.state);
        this.setState({
            task:'',
            remindAt:''
        })
        document.getElementById("remindAt").value="";
    }
    render() {
        return (
            <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <h4 className="text-darken-3">Add a Reminder: </h4>
                        <div className="input-field">
                            <label htmlFor="task">Add Task:</label>
                            <input id="task" type="text" onChange={this.handleChange} value={ this.state.task } className="white-text" required/>
                            {/* <label htmlFor="remindAt">Time:</label> */}
                            <input id="remindAt" type="time" onChange={this.handleChange} className="white-text" required />
                        </div>
                    </form>
                    <br />
                    <ActiveReminder reminders={this.props.reminders} compare={this.props.compare}/>
            </div>
        )
    }
}

export default CreateTodo
