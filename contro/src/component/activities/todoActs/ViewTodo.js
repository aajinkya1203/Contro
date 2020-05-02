import React from 'react'
import todoCheck from '../../../images/additional/todoCheck.png';
import moment from 'moment'

const ViewTodo=(props)=> {
    const { doneTodo } = props;
    const todoList = doneTodo.length ? (
        doneTodo.map(todo=>{
            return(
                <div className="card center" key={ todo.id }>
                    <div className="card-content">
                        <img src={ todoCheck } alt="todoCheck" className="todoCheck"/>
                        <h4 className="card-title">Task: { todo.task }</h4>
                    </div>
                    <div className="card-action lighten-4 black-text">COMPLETED ON: { moment(todo.completedAt.toDate()).calendar() }</div>
                </div>
            )
        })
    ) : (
        
        <div className="center">
            <h4>You have no Todos completed!</h4>
        </div>
        
    );
    return (
        <div className="container todoViewContainer">
            <h5>Completed ToDos:</h5>
            <div className="section">
                { todoList }
            </div>
        </div>
    )
}

export default ViewTodo
