import React, {useState} from "react";
import {useSelector} from "react-redux";
import OrderDetails from "./OrderDetails";

const Admin = () => {

    const carts = useSelector(state => state.carts)
    const [activeCartID, setActiveCartID] = useState(null)

    const renderCarts = () => {
        if (!carts.length) return;
        return carts.map(c => {
            const orderDate = new Date(c.date)
            return (
                <>
                    <li onClick={() => setActiveCartID(c.id)} key={c.id}>
                        Order #{c.id} from {orderDate.getDate()}/{orderDate.getMonth() + 1}/{orderDate.getFullYear()} at
                        0{orderDate.getHours()}:0{orderDate.getMinutes()}
                    </li>
                    {renderOrder(c)}
                </>)
        })
    }

    const renderOrder = (cart) => {
        if (cart.id !== activeCartID) return;
        return <OrderDetails cart={cart} />
    }

    return (
        <div>
            <ul>{renderCarts()}</ul>
        </div>
    )
}

export default Admin