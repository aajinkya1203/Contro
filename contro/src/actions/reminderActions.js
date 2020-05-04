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

export const remindPerson = (reminderID,fb)=>{
    return(dispatch, getState)=>{
        const firebaseID = getState().firebase.auth.uid;
        var task;
        // reminder.status="true";
        //some async call to db
        // toaster.notify(reminderID.task);
        fb.firestore().collection('allReminder')
            .doc(firebaseID)
            .collection('reminders')
            .doc(reminderID)
            .get().then((resp)=>{
                task = resp.data().task;
                return fb.firestore().collection('allReminder')
                            .doc(firebaseID)
                            .collection('doneReminders')
                            .doc()
                            .set({
                                task:resp.data().task,
                                status:'true',
                                remindedOn:new Date()
                            })
            }).then(()=>{
                return fb.firestore().collection('allReminder')
                .doc(firebaseID)
                .collection('reminders')
                .doc(reminderID)
                .delete()
            }).then(()=>{
                toaster.notify("Reminder: "+task);
                dispatch({type:'REMIND_SUCCEDED'})
            }).catch((err)=>{
                dispatch({type:'REMIND_SUCCEDED_FAIL',err})
            })
    }
}