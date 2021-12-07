import { GET_SERVICES, RESET_SERVICES, DELETE_SERVICE } from "../actions/services.action";

const initialState = [];

export default function servicesReducer(state = initialState, action){
    switch (action.type){
        case GET_SERVICES:
            return action.payload;
        case RESET_SERVICES:
            return action.payload;
        case DELETE_SERVICE:
            return state.filter((service) => service.service_id !== action.payload)
        default: 
            return state;
    }
}