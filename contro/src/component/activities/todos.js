import React, { Component } from 'react';
import Navbar from '../auth/Navbar';
import { Link } from 'react-router-dom';
import ViewTodo from './todoActs/ViewTodo';
import CreateTodo from './todoActs/CreateTodo';

class Todos extends Component {
    state = {
        todos:[
            {id:1,task:'buy milk', status:'false'},
            {id:3,task:'go to gym', status:'false'},
            {id:5,task:'cook', status:'false'},
        ],
        doneTodo:[
            {id:2,task:'egg hunt', status:'true'}
        ],
        decide:'create',
    }
    addTodo=(todo)=>{
        todo.id=Math.random();
        let tempTodo = [...this.state.todos,todo];
        this.setState({
            todos:tempTodo
        })
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
    todoComplete=(todoID)=>{
        console.log("done")
        let tempTodo = this.state.todos.filter(todo=>{
            return todo.id!==todoID;
        });
        let todoToDelete = this.state.todos.find(todo=>{
            return todo.id===todoID;
        });
        let compTodo = [...this.state.doneTodo,todoToDelete];
        this.setState({
            todos:tempTodo,
            doneTodo:compTodo
        })

    }

    render() {
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
                    <CreateTodo todos={this.state} addTodo={ this.addTodo } todoComplete={ this.todoComplete }/>
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
                    <ViewTodo doneTodo={this.state}/>
                </div>
            )
        }
        
    }
}

export default Todos
