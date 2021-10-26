import {FETCH_CATEGORY, FETCH_ERROR, FETCH_PRODUCTS} from "./constTypes";

const initState = {
    categories: [],
    products: [],
    error: null
}

export const reducer = (state = initState, {type, payload}) => {
    switch (type) {
        case FETCH_CATEGORY:
            return {...state, categories: payload}
        case FETCH_PRODUCTS:
            return {...state, products: payload}
        case FETCH_ERROR:
            return {...state, error: payload}
        default:
            return state
    }
}

