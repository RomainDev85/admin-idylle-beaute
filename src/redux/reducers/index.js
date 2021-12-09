import { combineReducers } from "redux";
import userReducer from "./user.reducer"
import menuReducer from "./menu.reducer";
import screenReducer from "./screen.reducer";
import categoriesReducer from "./categories.reducer";
import servicesReducer from "./services.reducer";
import modalDeleteServiceReducer from "./modalDeleteService.reducer";
import modalCreateCategoryReducer from "./modalCreateCategory";
import modalCreateServiceReducer from "./modalCreateService";

export default combineReducers({
    userReducer,
    menuReducer,
    screenReducer,
    categoriesReducer,
    servicesReducer,
    modalDeleteServiceReducer,
    modalCreateCategoryReducer,
    modalCreateServiceReducer,
})