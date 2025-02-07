import React, { Component, useState } from "react";
import "../CSS/conferenceevent.css";
import { useSelector } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

const style = {
    navLinks: {
        "background-color": '#191970',

    },
    navItems: {
        "list-style-type": 'none',
        "color": 'white',
        display: 'flex',
        gap: '20px',
        "flex-direction": "row",
        margin: 0
    },
    venueListCss: {
        "list-style-type": "none",
        "padding": 0
    },
    venueListItems: {
        display: "flex",
        "justify-content": "space-between",
        "align-items": "center",
        "margin-bottom": "10px"
    }
}

const Header = () => {
    const totalItemsCount = useSelector(state => state.carts.totalItemsCount);
    const navigate = useNavigate();

    const goToCart = () => {
         navigate("/home/cart");
    }

    return (
        <div className={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
            <nav style={style.navLinks}>
                <ul style={style.navItems}>
                   <li style={{ color: 'burlywood', float: 'left' }}>
                        <img style={{width:"90px", height:"90px", float:"left"}} src="data:image/png;base64,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" alt="" />
                    </li>
                    <li style={{ color: 'burlywood', float: 'left' }}>
                        <h2 style={{marginBottom:0}}>Paradise Nursery</h2>
                        <p style={{margin:0}}>Where Green Meets Serenity</p>
                    </li>
                    <li style={{ color: 'white', flexBasis: '15%' }}>
                        <h2>Plants</h2>
                    </li>
                    <li style={{  margin: 'auto', fontSize: "30px", display:"flex" , alignItems: "center",marginRight: "20px" }}>
                        <FiShoppingCart size="30" color="success" title="5" />
                        <span type="button" onClick={goToCart}>{totalItemsCount}</span>
                        {/* <button style={{ backgroundColor: 'burlywood', color: 'white' }} onClick={goToCart}>Cart</button> */}

                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;