export const signIN=(creds,fb)=>{
    return(dispatch,getState)=>{
        fb.auth().signInWithEmailAndPassword(
            creds.email,
            creds.password
        ).then(()=>{
            dispatch({type:'LOGIN_SUCCESS'});
        }).catch((err)=>{
            dispatch({type:'LOGIN_FAIL',err});
        })

    }
}

export const signUP=(creds,fb)=>{
    return(dispatch,getState)=>{
        console.log(fb)
        fb.auth().createUserWithEmailAndPassword(
            creds.email,
            creds.password
        ).then((resp)=>{
            console.log(resp);
            return fb.firestore().collection('users').doc(resp.user.uid).set({
                authorFirstName: creds.fname,
                authorLastName:creds.lname,
                initials:creds.fname[0]+creds.lname[0]
            })
        }).then(()=>{
            dispatch({type:'SIGNUP_SUCCESS'})
        }).catch((err)=>{
            dispatch({type:'SIGNUP_FAIL',err})
        })
        
    } 
}

export const signOUT=(fb)=>{
    return(dispatch,getState)=>{
        fb.auth().signOut().then(()=>{
            dispatch({type:'SIGNOUT_SUCCESS'})
        }).catch((err)=>{
            dispatch({type:'SIGNOUT_FAIL',err})
        })
    }
}