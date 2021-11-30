import { SET_MENU } from "../actions/menu.action";

const initialState = {};

export default function menuReducer(state = initialState, action){
    switch(action.type){
        case SET_MENU:
            return action.payload
        default: 
            return state
    }
}