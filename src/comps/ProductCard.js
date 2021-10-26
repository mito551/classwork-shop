import React from "react";
import {Link} from "react-router-dom";

const ProductCard = ({product}) => {
    return (
        <article>
            <figure><img src={product.image} alt={product.title} /></figure>
            <h3>{product.title}</h3>
            <span>{product.price}</span>
            <Link to={`/product/${product.id}`}>Learn more...</Link>
        </article>
    )
}

export default ProductCard