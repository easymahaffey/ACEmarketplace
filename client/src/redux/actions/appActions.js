import { OPEN_ITEM_MODAL, CLOSE_ITEM_MODAL, NO_HAMBURGER, GET_HAMBURGER, CLOSE_MENU, OPEN_MENU, GET_ITEMS } from '../types'

export const openItemModal = () =>{
    return {
        type: OPEN_ITEM_MODAL
    }
}

export const closeItemModal = () =>{
    return {
        type: CLOSE_ITEM_MODAL
    }
}

export const noHamburger = () =>{
    return {
        type: NO_HAMBURGER
    }
}

export const getHamburger = () => {
    return {
        type: GET_HAMBURGER
    }
}

export const closeMenu = () => {
    return {
        type: CLOSE_MENU
    }
}

export const openMenu = () => {
    return {
        type: OPEN_MENU
    }
}

export const getItems = (items) =>{
    return {
        type: GET_ITEMS,
        payload: items
    }
}


