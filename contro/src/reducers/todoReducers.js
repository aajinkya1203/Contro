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
            console.log(action.todo)
        }
    }
    return state;
}

export default todoReducers;