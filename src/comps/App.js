import React, {useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import NavBar from "./NavBar";
import Admin from "./Admin";
import Product from "./Product";
import ProductList from "./ProductList";
import {useDispatch} from "react-redux";
import {getAllCategories, getAllProducts} from "../store/actionGenerator";

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllProducts())
        dispatch(getAllCategories())
    },[])

    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/" exact={true}>
                    <ProductList />
                </Route>
                <Route path="/admin">
                    <Admin />
                </Route>
                <Route path="/product/:productID">
                    <Product />
                </Route>
            </Switch>
        </div>
    )
}

export default App;