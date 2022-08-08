import React from 'react';

function Auth_Reducer(props) {

    const init_state = {
        isloading : false,
        user : null,
        error : ''
    }

    console.log(action.type , action.payload , state);
    switch(action.type){
        case 'EMAIL_VERIFICATION' :
            return{
                ...state,
                isloading : false,
                user : action.payload,
                error: '',
            } 
        default : 
            return state    
    }    
}

export default Auth_Reducer;