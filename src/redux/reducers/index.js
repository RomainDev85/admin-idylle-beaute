import { combineReducers } from "redux";
import userReducer from "./user.reducer"
import menuReducer from "./menu.reducer";
import screenReducer from "./screen.reducer";

export default combineReducers({
    userReducer,
    menuReducer,
    screenReducer,
})