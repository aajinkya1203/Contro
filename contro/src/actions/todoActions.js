export const todoActions = (todo)=>{
    return(dispatch,getState)=>{
        dispatch({type:'CREATE_TODO',todo});
    }
}