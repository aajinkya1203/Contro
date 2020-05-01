import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import notesReducers from './notesReducers';
import reminderReducers from './reminderReducers';
import authReducers from './authReducers';
import todoReducers from './todoReducers'

const rootReducers = combineReducers({
    firebase:firebaseReducer,
    firestore:firestoreReducer,
    notes:notesReducers,
    auth:authReducers,
    reminder:reminderReducers,
    todo:todoReducers
})

export default rootReducers