import axios from 'axios';

export const GET_SERVICES_BY_CATEGORY = "GET_SERVICES_BY_CATEGORY";
export const RESET_SERVICES = "RESET_SERVICES";
export const DELETE_SERVICE = "DELETE_SERVICE";

export const getServicesByCategory = (nameCategory, idCategory) => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_BASE_URL}/api/services/${nameCategory}`)
            .then((res) => {
                dispatch({type: GET_SERVICES_BY_CATEGORY, payload: { name: nameCategory, idCategory: idCategory, services: res.data}})
            })
            .catch(err => console.log(err))
    }
}

export const resetServices = () => {
    return (dispatch) => {
        dispatch({type: RESET_SERVICES, payload: []})
    }
}

export const deleteService = (idService) => {
    return (dispatch) => {
        return axios
            .delete(`${process.env.REACT_APP_BASE_URL}/api/services/${idService}`)
            .then((res) => {
                dispatch({ type: DELETE_SERVICE, payload: {idService} })
            })
            .catch(err => console.log(err))
    }
}
