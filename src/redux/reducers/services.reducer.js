import { GET_SERVICES, RESET_SERVICES, DELETE_SERVICE, EDIT_SERVICE } from "../actions/services.action";

const initialState = [];

export default function servicesReducer(state = initialState, action){
    switch (action.type){
        case GET_SERVICES:
            return action.payload;
        case RESET_SERVICES:
            return action.payload;
        case DELETE_SERVICE:
            return state.filter((service) => service.service_id !== action.payload);
        case EDIT_SERVICE:
            return state.map((service) => {
                if(action.payload.id === service.service_id){
                    if(action.payload.error) return { ...service, error: action.payload.error }
                    else return { 
                        service_id: service.service_id,
                        name: action.payload.name,
                        category_id: service.category_id,
                        price: action.payload.price,
                        time: action.payload.time,
                        description: action.payload.description,
                        url_service: action.payload.url_service,
                        url_category: service.url_category
                    };
                }
                else return service;
            });
        default: 
            return state;
    }
}