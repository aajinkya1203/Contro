export const todoActions = (todo,fb)=>{
    return(dispatch,getState)=>{
        const firebaseUID = getState().firebase.auth.uid;
        fb.firestore().collection('allTodo')
            .doc(firebaseUID)
            .collection('todos')
            .doc()
            .set({
                task:todo.task,
                status:'false',
                createdAt:new Date(),
                completedAt:null
            }).then(()=>{
                dispatch({type:'CREATE_TODO'});
            }).catch((err)=>{
                dispatch({type:'CREATE_TODO_FAIL',err});
            })
    }
}

export const todoPerson =(todoID,fb)=>{
    return(dispatch,getState)=>{
        const firebaseUID = getState().firebase.auth.uid;
        fb.firestore().collection('allTodo')
            .doc(firebaseUID)
            .collection('todos')
            .doc(todoID)
            .get().then((resp)=>{
                return fb.firestore().collection('allTodo')
                    .doc(firebaseUID)
                    .collection('doneTodo')
                    .doc()
                    .set({
                        task:resp.data().task,
                        status:'true',
                        createdAt:resp.data().createdAt,
                        completedAt:new Date()
                    })
            }).then(()=>{
                return fb.firestore().collection('allTodo')
                .doc(firebaseUID)
                .collection('todos')
                .doc(todoID)
                .delete();
            }).then(()=>{
                dispatch({type:'TODO_DONE'});
            }).catch((err)=>{
                dispatch({type:'TODO_DONE_FAIL',err});
            })
    }
}