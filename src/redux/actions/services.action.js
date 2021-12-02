import axios from 'axios';

export const GET_SERVICES_BY_CATEGORY = "GET_SERVICES_BY_CATEGORY";
export const RESET_SERVICES = "RESET_SERVICES";

export const getServicesByCategory = (nameCategory) => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_BASE_URL}/api/services/${nameCategory}`)
            .then((res) => {
                dispatch({type: GET_SERVICES_BY_CATEGORY, payload: { name: nameCategory, services: res.data}})
            })
            .catch(err => console.log(err))
    }
}

export const resetServices = () => {
    return (dispatch) => {
        dispatch({type: RESET_SERVICES, payload: []})
    }
}
