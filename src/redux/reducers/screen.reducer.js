import { SET_SCREEN } from "../actions/screen.action";

const initialState = {};

export default function screenReducer(state = initialState, action){
    switch(action.type){
        case SET_SCREEN:
            return action.payload
        default: 
            return state
    }
}