import React, {useState} from "react";
import {useSelector} from "react-redux";

const OrderDetails = ({cart}) => {

    const products = useSelector(state => state.products)

    const getProductByID = productID => {
        return products.find(p => p.id === productID)
    }

    const productMagic = () => {
        return cart.products.map(p => ({
                ...getProductByID(p.productId), quantity: p.quantity
            })
        )
    }

    const [cartProducts, setCartProducts] = useState(() => productMagic());

    const totalSum = () => {
        return cartProducts.reduce((amount, product) => {
            return amount + product.price * product.quantity
        }, 0)
    }

    return (
        <>
        <div>Total Order Sum: {totalSum()} consisting {cartProducts.length} products</div>
            <div>I'm a div</div>
            <div>suck my dick</div>
        </>
    )
}

export default OrderDetails