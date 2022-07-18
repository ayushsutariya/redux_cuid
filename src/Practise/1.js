// ACtion

import { combineReducers, createStore } from "redux"



const Create_Policy = () => {
    return{
        type: 'CREATE_POLICY',
        payload : {
            name: 'Ayush',
            policy_amount: 20
        }
    }   
}

const Create_Claim = () => {
    return {
        type: 'CREATE_CLAIM',
        payload: {
            name: 'Ayush',
            claimable_amount : 100 
        }
    }
}

const Delete_Policy = () => {
    return { 
        type: 'DELETE_POLICY',
        payload: {
            name: 'Ayush'
        }
    }
}

// Reducers

const Accounting = (exisiting_amount , action) => {
    switch(action.type){
        case  'CREATE_POLICY' : 
            return exisiting_amount + action.payload.policy_amount
         
        case 'CREATE_CLAIM' :
            return  exisiting_amount - action.payload.claimable_amount 
        
        default : 
            return exisiting_amount    
    }
}

const Policies = (exisiting_policies , action) => {
    switch(action.type){
        case 'CREATE_POLICY' :
            return [...exisiting_policies , action.payload.name]

        case 'DELETE_POLICY' : 
            return exisiting_policies.filter(name => name !== action.payload.name)
        
        default : 
            return exisiting_policies
    }
}

const Claim = (exisiting_claims , action) => {
    switch(action.type){
        case 'CREATE_CLAIM' :
            return [...exisiting_claims , action.payload.name]
        
        default :
        return exisiting_claims    
    }
}

const AllReducers = combineReducers({
    accounting: Accounting,
    Policies : Policies,
    Claims : Claim
})

const store = createStore(AllReducers);

store.dispatch(Create_Policy());
console.log(store.getState());