import *as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function changeFoodReducer(state=initialState.foods, action){
    switch (action.type) {
        case actionTypes.GET_FOODS_SUCCESS:
            
            return action.payload
    
        default:
            return state
    }
}