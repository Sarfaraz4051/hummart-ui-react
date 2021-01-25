import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const Cart = (props) => {
    const [cartButton, setcartButton] = useState("Start Shopping");
    const [itemsCount, setItemsCount] = useState(0);
    return(
    <div className="cart">
        <div className="cart-header">
            <div>
                <h2>
                    My Cart
                </h2>
            </div>
            <div>
                <AiFillCloseCircle onClick={props.handleShowCart} />
            </div>
        </div>

        <div className="cart-content">
            <div>
                <h4>No items in your cart</h4>
            </div>
            <div>
                <p>Your favourite items are just a click away.</p>
            </div>
        </div>

        <div className="cart-div">
            <button className="button4 cart-button">
                {cartButton}
            </button>
        </div>
    </div>
)};
export default Cart;
