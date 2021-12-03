import { GET_SERVICES_BY_CATEGORY, RESET_SERVICES, DELETE_SERVICE } from "../actions/services.action";

const initialState = [];

export default function servicesReducer(state = initialState, action){
    switch (action.type){
        case GET_SERVICES_BY_CATEGORY:
            const test = state.some(element => element.name === action.payload.name);
            if(test) return state;
            else return [...state, action.payload];
        case RESET_SERVICES:
            return action.payload;
        case DELETE_SERVICE:
            return state.map((category) => category.services.filter((service) => service.prestation_id !== action.payload.idService))
        default: 
            return state;
    }
}