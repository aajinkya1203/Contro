import React from 'react'
import notepad from '../../../images/additional/notepad.png';
import { Link } from 'react-router-dom'
import moment from 'moment'

const ViewNotes=(props)=> {
    console.log(props)
    const { notes } = props;
    const todoList = notes.length ? (
        notes.map(todo=>{
            return(
                <Link to={"/home/Notes/"+todo.id} key={ todo.id } className="linkTagNote">
                    <div className="card center" >
                        <div className="card-content">
                            <img src={ notepad } alt="todoCheck" className="todoCheck"/>
                            <h4 className="card-title">{ todo.title }</h4>
                            <p>{ todo.content }</p>
                        </div>
                        <div className="card-action lighten-4 black-text">NOTED ON: { moment(todo.createdAt.toDate()).calendar() }</div>
                    </div>
                </Link>
            )
        })
    ) : (
        
        <div className="center">
            <h4>You got no Notes saved!</h4>
        </div>
        
    );
    return (
        <div className="container noteViewContainer">
            <h5>All notes:</h5>
            <div className="section">
                { todoList }
            </div>
        </div>
    )
}

export default ViewNotes
