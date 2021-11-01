import React, {useState} from "react";
import {useSelector} from "react-redux";
import ProductCard from "./ProductCard";

const ProductList = () => {

    const products = useSelector(state => state.products)
    const categories = useSelector(state => state.categories)
    const [activeCategory, setActiveCategory] = useState(null)

    const renderCategories = () => {
        if (!categories.length) return;
        return categories.map(c => <li style={{cursor: "pointer"}} onClick={() => {
            setActiveCategory(c)
        }} key={c}>{c}</li>)
    }

    const renderProducts = () => {
        if (!products.length) return;
        const _products = activeCategory ? products.filter(p => p.category === activeCategory) : products
        return _products.map(p => <ProductCard product={p} key={p.id}/>)
    }

    return (
        <main>
            <ul>
            {renderCategories()}
            </ul>
            {renderProducts()}
        </main>
    )
}

export default ProductList