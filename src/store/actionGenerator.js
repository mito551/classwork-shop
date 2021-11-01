import {FETCH_CARTS, FETCH_CATEGORY, FETCH_ERROR, FETCH_PRODUCTS, FETCH_USERS} from "./constTypes";

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

export const getAllCarts = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://fakestoreapi.com/carts?limit=6')
            const data = await response.json()
            dispatch(fetchingCarts(data))
        } catch (e) {
            console.log(e.message)
            dispatch(fetchError(e.message))
        }
    }
}

export const getAllUsers = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://fakestoreapi.com/users')
            const data = await response.json()
            dispatch(fetchingUsers(data))
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

const fetchingCarts = (payload) => {
    return {type: FETCH_CARTS, payload}
}

const fetchingUsers = (payload) => {
    return {type: FETCH_USERS, payload}
}

const fetchError = (message) => {
    return {type: FETCH_ERROR, payload: message}
}