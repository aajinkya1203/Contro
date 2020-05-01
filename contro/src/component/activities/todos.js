import React, { Component } from 'react';
import Navbar from '../auth/Navbar';
import { Link } from 'react-router-dom';
import ViewTodo from './todoActs/ViewTodo';
import CreateTodo from './todoActs/CreateTodo';
import { connect } from 'react-redux'

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
                    <CreateTodo todos={todos}/>
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
                    <ViewTodo doneTodo={doneTodo}/>
                </div>
            )
        }
        
    }
}

const mapStateToProps=(state)=>{
    return{
        todos:state.todo.todos,
        doneTodo:state.todo.doneTodo
    }
}

export default connect(mapStateToProps)(Todos)
