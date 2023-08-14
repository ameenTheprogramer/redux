
import { combineReducers } from "redux";
import { ProductReduser } from "./ProductReduser";
import { selectedProductsReduser } from "./ProductReduser";


export const redusers = combineReducers({
    allproducts:ProductReduser,
    product:selectedProductsReduser,
})