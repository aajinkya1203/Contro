const initState = {
    authError: null
}

const authReducers = (state = initState, action) =>{
    switch(action.type){
        case 'LOGIN_SUCCESS':{
            console.log('login successfull');
            return{
                ...state,
                authError:null
            }
        }
        case 'LOGIN_FAIL':{
            console.log('login failed');
            return{
                ...state,
                authError:action.err.message
            }
        }
        case 'SIGNOUT_SUCCESS':{
            console.log("successfully logged out!")
            return state;
        }
        case 'SIGNOUT_FAIL':{
            console.log("log out fail")
            return{
                ...state,
                authError:action.err.message
            }
        }
        case 'SIGNUP_SUCCESS':{
            console.log("signup success");
            return{
                ...state,
                authError:null
            }
        }
        case 'SIGNUP_FAIL':{
            console.log("signup failed");
            return{
                ...state,
                authError:action.err.message
            }
        }
        default:{
            return state;
        }
    }
}

export default authReducers;