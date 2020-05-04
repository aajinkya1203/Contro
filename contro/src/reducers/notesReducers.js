const initState = {
    notes:[
        {id:1,title:'My first note',content:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.'},
        {id:2,title:'My second note',content:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'},
        {id:3,title:'Last note',content:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.'},
    ]  
}

const notesReducers = (state = initState, action)=>{
    switch(action.type){
        case 'CREATE_NOTE':{
            console.log("Successfully Created!");
            return{
                ...state
            }
        }
        case 'CREATE_NOTE_FAILED':{
            console.log("Note creation failed!");
            return{
                ...state
            }
        }
        default:{
            return state;
        }
    }
}

export default notesReducers;