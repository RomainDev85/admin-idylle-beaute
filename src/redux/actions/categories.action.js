import axios from 'axios';

export const GET_CATEGORIES = "GET_CATEGORIES";
export const RESET_CATEGORIES = "RESET_CATEGORIES";
export const ADD_CATEGORY = "ADD_CATEGORY";

export const getCategories = () => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_BASE_URL}/api/categories`)
            .then((res) => {
                dispatch({type: GET_CATEGORIES, payload: res.data})
            })
            .catch(err => console.log(err))
    }
}

export const resetCategories = () => {
    return (dispatch) => {
        return dispatch({type: RESET_CATEGORIES, payload: {}})
    }
}

export const addCategory = (data) => {
    return (dispatch) => {
        return axios
            .post(`${process.env.REACT_APP_BASE_URL}/api/categories`, data)
            .then((res) => {
                dispatch({type: ADD_CATEGORY, payload: res.data})
            })
            .catch(err => console.log(err))
    }
}