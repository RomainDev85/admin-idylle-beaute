import axios from 'axios';

export const GET_USER = "GET_USER";
export const SET_USER = "SET_USER";

export const getUser = () => {
    return (dispatch) => {
        return axios
            ({
                method: "get",
                url: "http://localhost:5000/jwt",
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
            .post("http://localhost:5000/api/login", data)
            .then((res) => {
                dispatch({type: SET_USER, payload: res.data})
            })
            .catch(err => console.log(err));
    };
};