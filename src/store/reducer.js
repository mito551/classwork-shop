import {FETCH_CARTS, FETCH_CATEGORY, FETCH_ERROR, FETCH_PRODUCTS, FETCH_USERS} from "./constTypes";

const initState = {
    categories: [],
    products: [],
    carts: [],
    users: [],
    error: null
}

export const reducer = (state = initState, {type, payload}) => {
    switch (type) {
        case FETCH_CATEGORY:
            return {...state, categories: payload}
        case FETCH_PRODUCTS:
            return {...state, products: payload}
        case FETCH_CARTS:
            return {...state, carts: payload}
        case FETCH_USERS:
            return {...state, users: payload}
        case FETCH_ERROR:
            return {...state, error: payload}
        default:
            return state
    }
}

