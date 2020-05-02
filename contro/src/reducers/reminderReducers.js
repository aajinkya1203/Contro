const initState = {
    reminders:[
        {id:1,task:'buy milk', status:'false', remindAt:"08:30"},
        {id:4,task:'do course', status:'false', remindAt:"22:45"},
        {id:3,task:'go to gym', status:'false', remindAt:"10:45"},
        {id:5,task:'cook', status:'false', remindAt:"21:00"},
    ],
    doneReminders:[
        {id:2,task:'grab lunch', status:'true',remindAt:"15:00"},
    ]   
}

const reminderReducers = (state = initState, action)=>{
    switch(action.type){
        case 'CREATE_REMINDER':{
            console.log('Reminder Created!');
            return state;
        }
        case 'CREATE_REMINDER_FAIL':{
            console.log('Reminder Creation failed!');
            return state;
        }
        case 'REMIND_SUCCEDED':{
            console.log('remind successful!');
            return state;
        }
        default:{
            return state;
        }
    }
}

export default reminderReducers;