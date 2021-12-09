export const SHOW_MODAL_CREATE_SERVICE = "SHOW_MODAL_CREATE_SERVICE";
export const HIDE_MODAL_CREATE_SERVICE = "HIDE_MODAL_CREATE_SERVICE";

export const showModalCreateService = () => {
    return (dispatch) => {
        dispatch({type: SHOW_MODAL_CREATE_SERVICE, payload: {open: true}})
    }
};

export const hideModalCreateService = () => {
    return (dispatch) => {
        dispatch({type: HIDE_MODAL_CREATE_SERVICE, payload: {open: false}})
    }
};