export const SET_SCREEN = "SET_SCREEN";

export const setScreen = (screen) => {
    return (dispatch) => {
        dispatch({type: SET_SCREEN, payload: screen})
    }
}