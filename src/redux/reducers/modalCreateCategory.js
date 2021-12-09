import { HIDE_MODAL_CREATE_CATEGORY, SHOW_MODAL_CREATE_CATEGORY } from "../actions/modalCreateCategory";

const initialState = { open: false };

export default function modalCreateCategoryReducer(state = initialState, action){
    switch(action.type){
        case SHOW_MODAL_CREATE_CATEGORY:
            return action.payload;
        case HIDE_MODAL_CREATE_CATEGORY:
            return action.payload;
        default: 
            return state;
    }
}