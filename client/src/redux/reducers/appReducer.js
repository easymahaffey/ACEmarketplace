import { CLOSE_ITEM_MODAL, CLOSE_MENU, GET_HAMBURGER, NO_HAMBURGER, OPEN_ITEM_MODAL, OPEN_MENU, GET_ITEMS, UPLOAD_PHOTO } from '../types'

const initialState = {
    addContactModal: false,
    hamburger: true,
    menu: true,
    items: []
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_ITEM_MODAL:
            return {
                ...state,
                addItemModal: true
            }
        case CLOSE_ITEM_MODAL:
            return {
                ...state,
                addItemModal: false
            }
        case NO_HAMBURGER:
            return {
                ...state,
                hamburger: false
            }
        case GET_HAMBURGER:
            return {
                ...state,
                hamburger: true
            }
        case OPEN_MENU:
            return {
                ...state,
                menu: true
            }
        case CLOSE_MENU:
            return {
                ...state,
                menu: false
            }
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                addItemModal: false,
                hamburger: true
            }
        case UPLOAD_PHOTO:
            return {
                ...state,
                photo: action.payload,
                addItemModal: true,
                hamburger: true
            }
        default:
            return state;
    }
}

export default appReducer