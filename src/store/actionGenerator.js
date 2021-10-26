import {FETCH_CATEGORY, FETCH_ERROR, FETCH_PRODUCTS} from "./constTypes";

export const getAllCategories = () => {
    // console.log("running getallcategories")
    return async (dispatch) => {
        try {
            const response = await fetch('https://fakestoreapi.com/products/categories')
            const data = await response.json()
            dispatch(fetchingCategories(data))
        } catch (e) {
            console.log(e.message)
            dispatch(fetchError(e.message))
        }
    }
}

export const getAllProducts = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            dispatch(fetchingProducts(data))
        } catch (e) {
            console.log(e.message)
            dispatch(fetchError(e.message))
        }
    }
}

const fetchingCategories = (data) => {
    return {type: FETCH_CATEGORY, payload: data}
}

const fetchingProducts = (data) => {
    return {type: FETCH_PRODUCTS, payload: data}
}

const fetchError = (message) => {
    return {type: FETCH_ERROR, payload: message}
}