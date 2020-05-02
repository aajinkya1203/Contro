export const notesActions=(note,fb)=>{
    // some async func to db
    return(dispatch,getState)=>{
        console.log(getState());
        const firebaseUID = getState().firebase.auth.uid;
        fb.firestore().collection('allNotes')
            .doc(firebaseUID)
            .collection('notes').doc().set({
                title:note.title,
                content:note.content,
                createdAt:new Date()
            }).then(()=>{
                dispatch({type:'CREATE_NOTE'});
            }).catch((err)=>{
                dispatch({type:'CREATE_NOTE_FAILED',err});
            })
    }
    
}