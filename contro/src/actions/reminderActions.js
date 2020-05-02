import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";


export const reminderActions =(reminder,fb)=>{
    return(dispatch,getState)=>{
        const firebaseID = getState().firebase.auth.uid;
        fb.firestore().collection('allReminder')
            .doc(firebaseID)
            .collection('reminders')
            .doc()
            .set({
                task:reminder.task,
                status:'false',
                remindAt: reminder.remindAt
            }).then(()=>{
                dispatch({type:'CREATE_REMINDER'})
            }).catch((err)=>{
                dispatch({type:'CREATE_REMINDER_FAIL',err})
            })
    }
}

export const remindPerson = (reminder)=>{
    return(dispatch, getState)=>{
        reminder.status="true";
        //some async call to db
        toaster.notify(reminder.task);
        dispatch({type:'REMIND_SUCCEDED'})
    }
}