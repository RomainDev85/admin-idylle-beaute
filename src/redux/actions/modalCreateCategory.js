export const SHOW_MODAL_CREATE_CATEGORY = "SHOW_MODAL_CREATE_CATEGORY";
export const HIDE_MODAL_CREATE_CATEGORY = "HIDE_MODAL_CREATE_CATEGORY";

export const showModalCreateCategory = (id) => {
    return (dispatch) => {
        dispatch({type: SHOW_MODAL_CREATE_CATEGORY, payload: {open: true}})
    }
};

export const hideModalCreateCategory = () => {
    return (dispatch) => {
        dispatch({type: HIDE_MODAL_CREATE_CATEGORY, payload: {open: false}})
    }
};