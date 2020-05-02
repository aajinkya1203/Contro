const initState = {
    todos:[
        {id:1,task:'buy milk', status:'false', createdAt:null, completedAt:null},
        {id:3,task:'go to gym', status:'false', createdAt:null, completedAt:null},
        {id:5,task:'cook', status:'false', createdAt:null, completedAt:null},
    ],
    doneTodo:[
        {id:2,task:'egg hunt', status:'true'}
    ]
}

const todoReducers = (state = initState, action)=>{
    switch(action.type){
        case 'CREATE_TODO':{
            console.log("Todo created successfully!");
            return state;
        }
        case 'CREATE_TODO_FAIL':{
            console.log("Todo creation unsuccessful!");
            return state;
        }
        case 'TODO_DONE':{
            console.log('todo done!')
            return state;
        }
        default:{
            return state;
        }
    }
}

export default todoReducers;