export const SHOW_MODAL_DELETE_SERVICE = "SHOW_MODAL_DELETE_SERVICE";
export const HIDE_MODAL_DELETE_SERVICE = "HIDE_MODAL_DELETE_SERVICE";

export const showModalDeleteService = (id) => {
    return (dispatch) => {
        dispatch({type: SHOW_MODAL_DELETE_SERVICE, payload: {open: true, id_service: id}})
    }
}

export const hideModalDeleteService = () => {
    return (dispatch) => {
        dispatch({type: HIDE_MODAL_DELETE_SERVICE, payload: {open: false, id_service: null}})
    }
}