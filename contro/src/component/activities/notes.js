import React, { Component } from 'react'
import Navbar from '../auth/Navbar';
import { Link } from 'react-router-dom'
import CreateNote from './NotesActs/CreateNote'
import ViewNotes from './NotesActs/ViewNotes'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import notesBG from '../../images/DiffPageResources/notesBG.svg'

class Notes extends Component {
    state ={
        decide:'create'
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

    render() {
        console.log(this.props)
        const { notes } = this.props;
        if(this.state.decide==="create"){
            return (
                <div>
                    <Navbar />
                    <img src={ notesBG } alt="notesBG" className="scrollFace reminderFace"/>
                    <div className="container todoContainer">
                        <h4 className="white-text text-darken-3">NOTES     | </h4>
                        <ul className="todoActs">
                            <li><Link onClick={()=>{this.handleDecide('create')}}>New Note</Link></li>
                            <li><Link onClick={()=>{this.handleDecide('view')}}>View All Notes</Link></li>
                        </ul>
                    </div>
                    <hr className="seperation" />
                    <CreateNote/>
                </div>
            )
        }else{
            return (
                <div>
                    <Navbar />
                    <img src={ notesBG } alt="notesBG" className="scrollFace reminderFace"/>
                    <div className="container todoContainer">
                        <h4 className="white-text text-darken-3">NOTES     | </h4>
                        <ul className="todoActs">
                            <li><Link onClick={()=>{this.handleDecide('create')}}>New Note</Link></li>
                            <li><Link onClick={()=>{this.handleDecide('view')}}>View All Notes</Link></li>
                        </ul>
                    </div>
                    <hr className="seperation" />
                    <ViewNotes notes={notes} />
                </div>
            )
        }
        
    }
}
const mapStateToProps = (state)=>{
    console.log(state);
    return{
        notes:state.firestore.ordered.notes,
        auth:state.firebase.auth
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect((props)=>[
        {
            collection:'allNotes',
            doc:`${props.auth.uid}`,
            subcollections:[
                {collection:'notes'}
            ],
            storeAs:'notes'
        }
    ])
    )
    (Notes)
