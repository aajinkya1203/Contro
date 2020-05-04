import React from 'react'
import todoCheck from '../../../images/additional/todoCheck.png';
import { todoPerson } from '../../../actions/todoActions';
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';
import moment from 'moment'

const ActiveTodo=(props)=> {
    const { todos,todoPerson } = props;
    const todoList = todos.length ? (
        todos.map(todo=>{
            return(
                <div className="card center" key={ todo.id } onClick={()=>{todoPerson(todo.id,props.firebase)}}>
                    <div className="card-content">
                        <img src={ todoCheck } alt="todoCheck" className="todoCheck"/>
                        <h4 className="card-title">Task: { todo.task }</h4>
                    </div>
                    <div className="card-action lighten-4 black-text">CREATED ON: { moment(todo.createdAt.toDate()).calendar() }</div>
                </div>
            )
        })
    ) : (
        
        <div className="center">
            <h4>You have no Pending Todos!</h4>
        </div>
        
    );
    return (
        <div className="container todoViewContainer">
            <h5>Pending ToDos:</h5>
            <div className="section">
                { todoList }
            </div>
        </div>
    )
}
const mapDispatchToProps=(dispatch)=>{
    return{
        todoPerson:(todoID,fb)=>dispatch(todoPerson(todoID,fb))
    }
}

export default withFirebase(connect(null,mapDispatchToProps)(ActiveTodo))
