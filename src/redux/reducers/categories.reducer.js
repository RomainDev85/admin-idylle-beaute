import { ADD_CATEGORY, GET_CATEGORIES, RESET_CATEGORIES } from "../actions/categories.action";

const initialState = {}

export default function categoriesReducer(state = initialState, action){
    switch (action.type){
        case GET_CATEGORIES:
            return action.payload;
        case RESET_CATEGORIES:
            return action.payload;
        case ADD_CATEGORY: 
            return [...state, action.payload];
        default: 
            return state;
    }
}