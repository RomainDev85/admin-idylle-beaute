import axios from 'axios';

export const GET_USER = "GET_USER";
export const SET_USER = "SET_USER";
export const LOGOUT_USER = "LOGOUT_USER"

export const getUser = () => {
    return (dispatch) => {
        return axios
            ({
                method: "get",
                url: `${process.env.REACT_APP_BASE_URL}/jwt`,
                withCredentials: true,
            })
            .then((res) => {
                dispatch({type: GET_USER, payload: res.data});
            })
            .catch(err => console.log(err));
    };
};

export const setUser = (data) => {
    return (dispatch) => {
        return axios
            ({
                method: "post",
                url: `${process.env.REACT_APP_BASE_URL}/api/login`,
                withCredentials: true,
                data: data
            })
            .then((res) => {
                if(res.data.error) {
                    dispatch({type: SET_USER, payload: res.data})
                }
                else dispatch(getUser());
            })
            .catch(err => console.log(err));
    };
};

export const logoutUser = () => {
    return (dispatch) => {
        return axios
            ({
                method: "get",
                url: `${process.env.REACT_APP_BASE_URL}/api/logout`,
                withCredentials: true,
            })
            .then((res) => {
                 dispatch({type: LOGOUT_USER, payload: res.data})
            })
            .catch(err => console.log(err));
    };
};