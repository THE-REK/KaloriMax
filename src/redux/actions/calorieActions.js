import *as actionTypes from "./actionTypes"

export function handleChange(event){
   return {
       type: actionTypes.HANDLE_CHANGE,
       payload: event
   }

}
export function handleSubmit(event){
    return {
        type: actionTypes.HANDLE_SUBMİT,
        payload: event
    }
 
 }