export const SET_MENU = "SET_MENU";

export const setMenu = (menu) => {
    return (dispatch) => {
        dispatch({type: SET_MENU, payload: menu})
    }
}