import { OPEN_ITEM_MODAL, CLOSE_ITEM_MODAL, NO_HAMBURGER, GET_HAMBURGER, CLOSE_MENU, OPEN_MENU, GET_ITEM, GET_ITEMS, UPLOAD_PHOTO } from '../types'

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

export const getItem = (item) =>{
    return {
        type: GET_ITEM,
        payload: item
    }
}

export const getItems = (items) =>{
    return {
        type: GET_ITEMS,
        payload: items
    }
}

export const uploadPhoto = (photo) =>{
    return {
        type: UPLOAD_PHOTO,
        payload: photo
    }
}


