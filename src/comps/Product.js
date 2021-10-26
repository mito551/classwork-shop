import React from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

const Product = () => {

    const {productID} = useParams()
    const product = useSelector(state => state.products.find(p => p.id === +productID))

    return !product
        ?
            (<h1>Product not found!</h1>)
        :
            (<main>
                <figure><img src={product.image} alt={product.title} /></figure>
                <h1>{product.title}</h1>
                <h4>{product.category}</h4>
                <span>{product.price}</span>
                <p>{product.description}</p>
            </main>)
}

export default Product