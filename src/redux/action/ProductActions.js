

import { Actiontypes } from "../constants/Action-types";
export const setProducts = (products) => {
    return {
        type: Actiontypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selectedProducts = (product) => {
    return {
        type: Actiontypes.SELECTED_PRODUCT,
        payload: product,
    }
}

export const removeselectedProducts = () => {
    return {
        type: Actiontypes.REMOVE_SELECTED_PRODUCT,
    }
}