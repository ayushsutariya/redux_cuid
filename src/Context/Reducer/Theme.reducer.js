
export const Theme_Reducer = (state , action) => {
    switch(action.type){
        case 'TOGGLE_THEME' : 
            return {
                ...state,
                theme: action.payload
            }
        default : 
            return state    
    }
}