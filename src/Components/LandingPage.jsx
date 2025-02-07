import React, { Component } from "react";
import styles from "../CSS/landingpage.module.css";
import { useNavigate, useLocation } from "react-router-dom";

export const LandingPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const rouetToProductListing = () => {
        navigate('/home')
    }

    return (
        <div className={styles.main}>
            <div className={styles.left}>
                <h1>Welcome To Paradise Nursey</h1>
                <hr style={{width:"25px", margin:"auto"}} />
                <p>Where Green Meets Serenity</p>
                <button onClick={rouetToProductListing} className={styles.getStartedButton}>Get Started</button>
            </div>
            <div className={styles.right}>
                <p>Welcome To Paradise Nursey, Where Green Meets Serenity!</p>
                <p>Welcome to Paradise Nursery, your one-stop destination for all things green and beautiful! Our application is designed to provide gardening enthusiasts with a seamless and enjoyable shopping experience. Whether you're a seasoned gardener or just starting out, you'll find everything you need to create your own paradise. 
                    From a wide variety of plants, seeds, and gardening tools to expert advice and tips, our app is here to support your gardening journey every step of the way.</p>

                <p>Our user-friendly interface makes it easy to browse through our extensive catalog of plants and gardening supplies. 
                    You can search for specific items, explore different categories, and even get personalized recommendations based on your preferences and gardening needs. Detailed product descriptions, high-quality images, and customer reviews help you make informed decisions. 
                    Plus, our secure payment options and reliable delivery service ensure that your purchases arrive safely and on time.</p>
                <p>At Paradise Nursery, we believe that gardening is more than just a hobby – it's a way to connect with nature and bring beauty into your life. 
                    That's why we offer a range of resources to help you succeed, including gardening guides, video tutorials, and a community forum where you can share your experiences and learn from fellow gardeners. 
                    Join us today and start building your own green oasis with Paradise Nursery!</p>
            </div>
        </div>
    )
}