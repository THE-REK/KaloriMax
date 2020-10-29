import *as actionTypes from "./actionTypes"

export function addToProfile(cartItem){
    return {
        type:actionTypes.ADD_TO_PROFILE,
        payload:cartItem
    }
}