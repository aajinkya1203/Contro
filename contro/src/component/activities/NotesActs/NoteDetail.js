import React from 'react'
import Navbar from '../../auth/Navbar';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const NoteDetail=(props)=> {
    const { auth,note, personalDets } = props;
    if(!auth.uid) return <Redirect to='/'/>
    if(note){
        return (
            <div>
                <Navbar />
                <div className="container section songDetail">
                    {/* <img src={ abstractBG } className="mainBG" alt="Cover for Dashboard"/> */}
                    <div className="card z-depth-0">
                        <div className="card-content black-text">
                            <span className="card-title">{ note.title }</span>
                            <h6 className="artists">-</h6>
                            <p className="songInfo">
                                { note.content }
                            </p>
                        </div>
    
                        <div className="card-action grey lighten-4 grey-text">
                            <div>Posted by { personalDets.authorFirstName } { personalDets.authorLastName }
                            , { moment(note.createdAt.toDate()).fromNow() }</div>
                        </div>
    
                    </div>
                </div>            
            </div>
        )
    }else{
        return(
            <div>                
                <Navbar />
                <div className="container center section">
                    <h5>Loading Data...<br/>It'll only take a sec!</h5>
                </div>
            </div>

        )
    }
    
}

const mapStateToProps=(state,ownProps)=>{
    const id = ownProps.match.params.id;
    const allnotes = state.firestore.data.notes;
    const note = allnotes ? allnotes[id] : null;
    return{
        note:note,
        auth: state.firebase.auth,
        personalDets: state.firebase.profile
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
    )(NoteDetail)
