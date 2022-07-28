const init_state = {
    isloading : false,
    MedicineData : [],
    error : ''
}

export const Medicine_Reducer = (state = init_state , action) => {
    console.log(action.type , action.payload , state);
    switch(action.type){
        case 'GET_MEDICINES' :
            return{
                ...state,
                isloading : false,
                MedicineData : action.payload,
                error: '',
            } 

            case 'ERROR_MEDICINE' : 
            return {
                ...state,
                isloading : false,
                MedicineData : [] ,
                error : action.payload   
            }

            case 'LOADING_MEDICINE' : 
            return{
                ...state,
                isloading : true ,
                error : ''
            }

            case 'DELETE_MEDICINE' :
                return {
                  ...state,
                    isloading : false,
                    MedicineData : state.MedicineData.filter((l) => l.id !== action.payload),
                    error : ''
                }

            case 'ADD_MEDICINE' :
                return{
                    ...state,
                    isloading : false,
                    MedicineData : state.MedicineData.concat(action.payload),
                    error : ''
                } 

            case 'EDIT_MEDICINE' :
                return{
                    ...state,
                    isloading : false,
                    MedicineData : state.MedicineData.map((d) => {
                        if(d.id === action.payload.id){
                        return action.payload
                    } else {
                        return d
                    }
                }),
                    error : ''
                }    
            
        default : 
            return state  
    }
}

export default Medicine_Reducer;