import React, { Component } from 'react';
import ActiveTodo from './ActiveTodo';
import { connect } from 'react-redux';
import { todoActions } from '../../../actions/todoActions'

class CreateTodo extends Component {
    state={
        id:null,
        task:'',
        status:'false'
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.createTodo(this.state);
        this.setState({
            task:'',
        })
    }
    render() {
        return (
            <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <h4 className="text-darken-3">Create Todo</h4>
                        <div className="input-field">
                            <label htmlFor="task">Add Task:</label>
                            <input id="task" type="text" onChange={this.handleChange} value={ this.state.task } className="white-text" required/>
                        </div>
                    </form>
                    <br />
                    <ActiveTodo todos={this.props.todos} todoComplete= { this.props.todoComplete }/>
            </div>
        )
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        createTodo:(todo)=>dispatch(todoActions(todo))
    }
}

export default connect(null,mapDispatchToProps)(CreateTodo)
