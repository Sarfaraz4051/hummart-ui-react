import React, { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const CartItem = (props) => {
  return (
    <div className="item-in-cart">
      <ul>
        {props.items.map((i, index) => {
          return (
            <li key={index}>
              <div className="display-row">
                <div>
                  <img
                    src={`offers/${i.img_src}`}
                    className="cart-item-image"
                    alt={index}
                  />
                </div>
                <div>{i.title}</div>
                <div>
                  <AiFillCloseCircle onClick={()=>{
                    props.handleRemove(index)}} />
                </div>
              </div>
              <div>{i.new_price}</div>
              <div>
                <span className="add-drop" onClick="">+</span> 1
                <span className="add-drop" onClick="">-</span>
                 
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Cart = (props) => {
  const [cartButton, setcartButton] = useState("Start Shopping");

  useEffect(() => {
    if (props.cartItems.length > 0) {
      setcartButton("Proceed to Checkout");
    } else {
      setcartButton("Start Shopping");
    }
  }, [props.cartItems.length]);

  return (
    <div className="cart">
      <div className="cart-header">
        <div>
          <h2>My Cart</h2>
        </div>
        <div>
          <AiFillCloseCircle onClick={props.handleShowCart} />
        </div>
      </div>

      {!props.cartItems[0] && (
        <div className="cart-content">
          <div>
            <h4>No items in your cart</h4>
          </div>
          <div>
            <p>Your favourite items are just a click away.</p>
          </div>
        </div>
      )}

      {props.cartItems[0] && (
        <div>
          <CartItem items={props.cartItems} handleRemove={props.handleRem} />
        </div>
      )}

      <div className="cart-div">
        <button className="button4 cart-button">{cartButton}</button>
      </div>
    </div>
  );
};
export default Cart;
