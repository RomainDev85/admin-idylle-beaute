import axios from 'axios';

export const GET_SERVICES = "GET_SERVICES";
export const RESET_SERVICES = "RESET_SERVICES";
export const DELETE_SERVICE = "DELETE_SERVICE";
export const EDIT_SERVICE = "EDIT_SERVICE";

export const getServices = () => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_BASE_URL}/api/services`)
            .then((res) => {
                dispatch({type: GET_SERVICES, payload: res.data})
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

export const editService = (data) => {
    return (dispatch) => {
        return axios
            ({
                method: "put",
                url: `${process.env.REACT_APP_BASE_URL}/api/services/${data.id}`,
                data: data
            })
            .then((res) => {
                console.log(res.data);
                dispatch({type: EDIT_SERVICE, payload: res.data})            
            })
            .catch(err => console.log(err));
    };
};