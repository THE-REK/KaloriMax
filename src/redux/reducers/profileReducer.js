import *as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function profileReducer(state=initialState.profile,action){
	switch (action.type) {
		case actionTypes.ADD_TO_PROFILE:
			var addedItem= state.find(c=>c.food.id===action.payload.food.id);
			if (addedItem) {
				var newState= state.map( cartItem => {
					if(cartItem.food.id===action.payload.food.id) {
						return Object.assign({},addedItem,{quantity:addedItem.quantity+1})
					}
					return cartItem;
				})
				return newState;
			} else {
				return [...state, { ...action.payload }]
            }
            default:
			return state;
	}}