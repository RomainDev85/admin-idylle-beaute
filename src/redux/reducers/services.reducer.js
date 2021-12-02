import { GET_SERVICES_BY_CATEGORY, RESET_SERVICES } from "../actions/services.action";

const initialState = [];

export default function servicesReducer(state = initialState, action){
    switch (action.type){
        case GET_SERVICES_BY_CATEGORY:
            const test = state.some(element => element.name === action.payload.name);
            if(test) return state;
            else return [...state, action.payload];
        case RESET_SERVICES:
            return action.payload;
        default: 
            return state;
    }
}