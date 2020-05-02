import React, { Component } from 'react';
import { connect } from 'react-redux';
import { notesActions } from '../../../actions/notesActions';
import { withFirebase } from 'react-redux-firebase';

class CreateNote extends Component {
    state={
        id:null,
        title:'',
        content:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.createNote(this.state,this.props.firebase);
        this.setState({
            title:'',
            content:''
        })
    }
    render() {
        return (
            <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <h4 className="text-darken-3">Create a new Note:</h4>
                        <div className="input-field">
                            <label htmlFor="title">Title:</label>
                            <input id="title" type="text" onChange={this.handleChange} value={ this.state.title } className="white-text" required/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="content">Content:</label>
                            <textarea id="content" data-length="500" rows="10" className="materialize-textarea white-text" onChange={this.handleChange} value={ this.state.content } required/>
                            <span className="helper-text white-text">Let your thoughts flow...</span>
                        </div>
                        <div className="input-field">
                            <button className="btn z-depth-0 loginBtn">CREATE!</button>
                        </div>
                    </form>
                    <br />
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        createNote: (note,fb)=>dispatch(notesActions(note,fb))
    }
}

export default withFirebase(connect(null,mapDispatchToProps)(CreateNote))
