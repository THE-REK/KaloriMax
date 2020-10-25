import *as actionTypes from "./actionTypes"

export function getFoodSuccess(food){
    return {
        type: actionTypes.GET_FOODS_SUCCESS, 
        payload: food
    }
}
export function getFood(event){
    return function(dispatch){
        let url= "http://localhost:3000/foods/";
        
        return fetch(url)
        .then(r=>r.json())
        .then(result=>dispatch(getFoodSuccess(result)));
    }
}

export function changeFood(event){
    return{
        type: actionTypes.CHANGE_FOODS, 
        payload: event
    }
}