import React, { Component } from 'react';
import Navbar from '../auth/Navbar';
import { Link } from 'react-router-dom';
import ViewTodo from './todoActs/ViewTodo';
import CreateTodo from './todoActs/CreateTodo';
import { connect } from 'react-redux'
import { compose } from 'redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';

class Todos extends Component {
    state = {
        decide:'create',
    }
    handleDecide=(act)=>{
        if(act==="create"){
            this.setState({
                decide:'create'
            })
        }else{
            this.setState({
                decide:'view'
            })
        }
    }
    // todoComplete=(todoID)=>{
    //     const { todos, doneTodo } = this.props;
    //     let tempTodo = todos.filter(todo=>{
    //         return todo.id!==todoID;
    //     });
    //     let todoToDelete = todos.find(todo=>{
    //         return todo.id===todoID;
    //     });
    //     // let compTodo = [...doneTodo,todoToDelete];
    //     this.setState({
    //         todos:tempTodo,
    //         doneTodo:compTodo
    //     })
    // }

    render() {
        const { todos, doneTodo } = this.props;
        if(this.state.decide==="create"){
            return (
                <div>
                    <Navbar />
                    <div className="container todoContainer">
                        <h4 className="white-text text-darken-3">TODO     | </h4>
                        <ul className="todoActs">
                            <li><Link onClick={()=>{this.handleDecide('create')}}>Pending Todos</Link></li>
                            <li><Link onClick={()=>{this.handleDecide('view')}}>Completed Todos</Link></li>
                        </ul>
                    </div>
                    <hr className="seperation" />
                    {
                        isLoaded(this.props.todos) ?
                        <CreateTodo todos={todos}/> :
                        null
                    }
                </div>
            )
        }else{
            return (
                <div>
                    <Navbar />
                    <div className="container todoContainer">
                        <h4 className="white-text text-darken-3">TODO     | </h4>
                        <ul className="todoActs">
                            <li><Link onClick={()=>{this.handleDecide('create')}}>Pending Todos</Link></li>
                            <li><Link onClick={()=>{this.handleDecide('view')}}>Completed Todos</Link></li>
                        </ul>
                    </div>
                    <hr className="seperation" />
                    {
                        isLoaded(this.props.todos) ?
                        <ViewTodo doneTodo={doneTodo}/>:
                        null
                    }
                </div>
            )
        }
        
    }
}

const mapStateToProps=(state)=>{
    console.log(state);
    return{
        todos:state.firestore.ordered.todos,
        doneTodo:state.firestore.ordered.doneTodo,
        auth:state.firebase.auth
    }
    
    
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect((props)=>[
        {
            collection:'allTodo',
            doc:`${props.auth.uid}`,
            subcollections:[
                {collection:'todos'}
            ],
            storeAs:'todos'
        },
        {
            collection:'allTodo',
            doc:`${props.auth.uid}`,
            subcollections:[
                {collection:'doneTodo'}
            ],
            storeAs:'doneTodo'
        }
    ])
    )(Todos)
