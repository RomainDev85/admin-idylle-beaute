import { HIDE_MODAL_DELETE_SERVICE, SHOW_MODAL_DELETE_SERVICE } from "../actions/modalDeleteService.action";

const initialState = {open: false, id_service: null};

export default function modalDeleteServiceReducer(state = initialState, action){
    switch(action.type){
        case SHOW_MODAL_DELETE_SERVICE:
            return action.payload;
        case HIDE_MODAL_DELETE_SERVICE:
            return action.payload;
        default: 
            return state;
    }
}