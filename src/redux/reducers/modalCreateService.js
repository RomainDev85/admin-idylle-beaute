import { HIDE_MODAL_CREATE_SERVICE, SHOW_MODAL_CREATE_SERVICE } from "../actions/modalCreateService";

const initialState = {open: false};

export default function modalCreateServiceReducer(state = initialState, action){
    switch(action.type){
        case SHOW_MODAL_CREATE_SERVICE:
            return action.payload;
        case HIDE_MODAL_CREATE_SERVICE:
            return action.payload;
        default: 
            return state;
    }
}