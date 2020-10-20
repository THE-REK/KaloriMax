import *as actionTypes from "./actionTypes"

export function getFood(food){
    return {
        type: actionTypes.GET_FOODS_SUCCESS, 
        payload: food
    }
}