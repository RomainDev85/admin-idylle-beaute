import { GET_USER, SET_USER, LOGOUT_USER } from "../actions/user.action"

const initialState = {}

export default function userReducer(state = initialState, action){
    switch (action.type){
        case GET_USER:
            return action.payload;
        case SET_USER:
            return action.payload;
        case LOGOUT_USER:
            return action.payload;
        default: 
            return state;
    }
}