import {combineReducers} from "redux"
import changeFoodReducer from "./changeFoodReducer"
import cartReducer from "./cartReducer"
import calorieReducer from "./calorieReducer"
import waterReducer from "./waterReducer"
import profileReducer from "./profileReducer"

const rootReducer= combineReducers({
    changeFoodReducer,
    cartReducer,
    calorieReducer,
    waterReducer,
    profileReducer
})
export default rootReducer;