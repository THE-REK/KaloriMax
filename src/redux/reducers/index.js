import {combineReducers} from "redux"
import changeFoodReducer from "./changeFoodReducer"
import cartReducer from "./cartReducer"
import calorieReducer from "./calorieReducer"
import waterReducer from "./waterReducer"
const rootReducer= combineReducers({
    changeFoodReducer,
    cartReducer,
    calorieReducer,
    waterReducer
})
export default rootReducer;