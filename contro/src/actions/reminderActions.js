export const reminderActions =(reminder)=>{
    return(dispatch,getState)=>{
        dispatch({type:'CREATE_REMINDER',reminder})
    }
}