import { OPEN_MODAL, CLOSE_MODAL, TOGGLE_FORM, LOGOUT, WINDOW_RESIZE, SEND_MESSAGE, GET_USER } from '../types'

export const openModal = () =>{
    return {
        type: OPEN_MODAL
    }
}

export const closeModal = () =>{
    return {
        type: CLOSE_MODAL
    }
}

export const toggleForm = () =>{
    return {
        type: TOGGLE_FORM
    }
}

export const logout = () =>{
    return {
        type: LOGOUT
    }
}

export const windowResize = () =>{
    return {
        type: WINDOW_RESIZE
    }
}

export const sendMessage = (message) =>{
    return {
        type: SEND_MESSAGE,
        payload: message
    }
}


export const getUser = (user) =>{
    return {
        type: GET_USER,
        payload: user
    }
}


