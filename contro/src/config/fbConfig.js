import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyAUlk-S0khLCkRvmgEFBvhXJOJdZZplGMw",
authDomain: "controrary.firebaseapp.com",
databaseURL: "https://controrary.firebaseio.com",
projectId: "controrary",
storageBucket: "controrary.appspot.com",
messagingSenderId: "518129156787",
appId: "1:518129156787:web:6d3a025861ec34a324e6c6",
measurementId: "G-E5BCBDPEDK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;