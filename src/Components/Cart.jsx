import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQunatity, removeFromCart } from "../CartSlice";
import { useNavigate } from "react-router-dom";

const styles = {
    venuelistitems: {
        "list-style": "none",
        padding: 0,
        display: "block",
        color: "black",
        gap: "60px",
        margin: "40px",
        /* flex-direction: row; */
        /* flex-wrap: wrap; */
        /* max-width: 1200px; */
        "text-align": "-webkit-center"
    },

    venuelistitem: {
        "align-items": "center",
        "margin-bottom": "10px",
        flex: "1 1 calc(33.333% - 20px)",
        "box-sizing": "border-box",
        /* padding: 20px; */
        "padding-bottom": "10px",
        "background-color": "#ffffff",
        border: "1px solid #ddd",
        "border-radius": "8px",
        "text-align": "center",
        "box-shadow": "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease",
        width: "25%"
    }
}
const Cart = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state.carts.cartItems);
    const totalPrice = useSelector(state => state.carts.totalPrice);
    const navigate = useNavigate();

    console.log(selector);

    const handleCartIncrease = (item) => {
        dispatch(increaseQuantity(item));
    }


    const handleCartDecrease = (item) => {
        dispatch(decreaseQunatity(item));
    }

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item));
    }

    const routeToHomePage = () => {
        navigate("/home");
    }

    return (
        <>
            <h2>Total Cart Amount : ${totalPrice}</h2>
            <div className="venue-list">
                <ul style={styles.venuelistitems}>
                    {selector && selector.length > 0 ? selector.map((plant, index) => (
                        <li key={index} style={styles.venuelistitem}>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <img src={plant.imageUrl} width="200" height="auto" />
                                <div>
                                    <p>{plant.name}</p>
                                    <p>$ {plant.price}</p>
                                    <button className={`increase-decrease-btn`}
                                        onClick={() => handleCartDecrease(plant)}>
                                        -
                                    </button>
                                    &nbsp;
                                    {selector[index]?.quantity}
                                    &nbsp;
                                    <button className={`increase-decrease-btn`}
                                        onClick={() => handleCartIncrease(plant)}>
                                        +
                                    </button>
                                    <h4>Total : ${plant.quantity * plant.price}</h4>
                                    <button style={{ color: 'white', backgroundColor: "red" }} onClick={() => handleRemoveFromCart(plant)}>Remove</button>
                                </div>
                            </div>
                        </li>
                    )) : ''}
                </ul>
                <button style={{ color: 'white', backgroundColor: "green" }} onClick={routeToHomePage}>Continue Shopping</button>
                <p></p>
                <button style={{ color: 'white', backgroundColor: "green" }} onClick={routeToHomePage}>Checkout</button>
            </div>
        </>
    )
}

export default Cart;