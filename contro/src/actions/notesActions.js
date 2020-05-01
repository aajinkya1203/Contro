export const notesActions=(note)=>{
    // some async func to db
    return(dispatch,getState)=>{
        dispatch({type:'CREATE_NOTE',note});
    }
    
}