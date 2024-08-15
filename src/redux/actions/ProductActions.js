import { ActionTypes } from '../constants/ActionTypes.js'


export const setAddWigdet = (products) => {
    return {
        type: ActionTypes.SET_ADD_WIDGET,
        payload: products,
    }
}
export const setDeleteWigdet = (products) => {
    return {
        type: ActionTypes.SET_DELETE_WIDGET,
        payload: products,
    }
}
export const setUpdateWidget = (products) => {
    return {
        type: ActionTypes.SET_UPDATE_WIDGET,
        payload: products,
    }
}
