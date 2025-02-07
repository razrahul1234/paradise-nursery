import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from "./Header";
import Products from "./Products";
import Cart from "./Cart";

const HomePage = () => {
    return (
        <>
            <Header />
            
                {/* <nav>
          <Link to="/">Home</Link>
          <Link to="/conference"></Link>
        </nav> */}
                <Routes>
                    <Route path='/' element={<Products />}></Route>
                    <Route path='/cart' element={<Cart />}></Route>
                </Routes>
        </>
    )
}

export default HomePage;