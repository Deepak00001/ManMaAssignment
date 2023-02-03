import React from "react";
import "./Nav.css";
const Nav = () => {
    return(
        <>
            <div id="nav1">
                <div id="navleft">
                    <button id="btn">Home</button>
                    <button id="btn">About</button>
                    <button id="btn">Products</button>
                    <button id="btn">Careers</button>
                    <button id="btn">Blogs</button>
                    <button id="btn">Contact</button>
                </div>
                <div id="navright">
                    <button id= "btn2">Enquire Now</button>
                </div>
            </div>
        </>
    );
}
export default Nav;