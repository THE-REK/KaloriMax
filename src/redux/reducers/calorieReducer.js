import *as actionTypes from "../actions/actionTypes"

import initialState from "./initialState"

export default function calorieReducer(state=initialState.forms,action){
    switch (action.type) {
        case actionTypes.HANDLE_CHANGE:
            let name= action.payload.target.name;
            let value = action.payload.target.value;
            const newstate= Object.assign({...state},{[name]:value})
            return newstate
        case actionTypes.HANDLE_SUBMİT:
            action.payload.preventDefault();
            
             if(state.gender==="Erkek"){
                 var top= 66+ 13.75*state.kilo + 5*state.boy - 6.8*state.yas;
                 const newstate2= Object.assign({...state},{gkm:top})
                return newstate2;
             }else{
                var top2= 66.5+ 13.75*state.kilo + 5*state.boy - 6.8*state.yas;
                const newstate3= Object.assign({...state},{gkm:top2})
                return newstate3;
                 
             }
                    
        default:
           return state;
            
    }
}