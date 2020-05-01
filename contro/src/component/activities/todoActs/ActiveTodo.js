import React from 'react'
import todoCheck from '../../../images/additional/todoCheck.png';

const ActiveTodo=(props)=> {
    const { todos } = props;
    const todoList = todos.length ? (
        todos.map(todo=>{
            return(
                <div className="card center" key={ todo.id } onClick={()=>{alert("hell")}}>
                    <div className="card-content">
                        <img src={ todoCheck } alt="todoCheck" className="todoCheck"/>
                        <h4 className="card-title">Task: { todo.task }</h4>
                    </div>
                    <div className="card-action lighten-4 black-text">CREATED ON: 8:03PM</div>
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

export default ActiveTodo
