import { Actiontypes } from "../constants/Action-types";

const initialState = {
    products: []
}


export const ProductReduser = (state = initialState, { type, payload }) => {
    switch (type) {
        case Actiontypes.SET_PRODUCTS:

            return {...state, products:payload};

        default:
            return state;

    }
}

export const selectedProductsReduser =(state={}, {type, payload})=>{
    switch (type) {
        case Actiontypes.SELECTED_PRODUCT:
            

        return {...state, ...payload}
        case Actiontypes.REMOVE_SELECTED_PRODUCT:
            

        return {}
        default:
            return state;
    }

}