import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from './reducers/rootReducers';
import { Provider, useSelector } from 'react-redux';
import thunk from 'redux-thunk'
import { ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase';
import { reduxFirestore, createFirestoreInstance } from 'redux-firestore'
import firebase from 'firebase/app';
import fbConfig from './config/fbConfig';
import panda from './images/panda.gif'


const rrfConfig={
  userProfile:'users',
  useFirestoreForProfile:true,
  attachAuthIsReady:true
}


const store = createStore(rootReducers, 
  compose(
    applyMiddleware(thunk),
    reduxFirestore(fbConfig)
  )
);


const rrfProps ={
  dispatch:store.dispatch,
  config:rrfConfig,
  createFirestoreInstance,
  firebase,
}

function AuthIsReady({ children }){
    const auth = useSelector(state=>state.firebase.auth)
    if(isLoaded(auth)){
      return children
    }else{
      return <div className="center loading">
        <img src={ panda } alt="Loading..." />
      </div>
    }
}

ReactDOM.render(
  <Provider store = { store }>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <React.StrictMode>
        <AuthIsReady>
          <App />
        </AuthIsReady>
      </React.StrictMode>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
