import *as actionTypes from "../actions/actionTypes"

import initialState from "./initialState"

export default function waterReducer(state=initialState.waters, action){
    switch (action.type) {
        case actionTypes.HANDLE_CHANGE:
            let value = action.payload.target.value;
            let name= action.payload.target.name;
            const newstate= Object.assign({...state},{[name]:value})
            return newstate
            
        case actionTypes.HANDLE_SUBMİT:
            action.payload.preventDefault();
      
      
            let need= state.kilo*0.033 ;
            const newstate2= Object.assign({...state},{water:need})
            return newstate2;

    
        default:
            return state;
    }

}