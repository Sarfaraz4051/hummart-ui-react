import React, { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { IncreaseQuantity, DecreaseQuantity } from "../action";
import { useDispatch, useSelector } from "react-redux";
// import { handleInc, handleDec } from '../util'
const CartItem = (props) => {
  const cart_items = useSelector((state) => state.cart_items_array);
  const dispatch = useDispatch();

  const findItemIndex = (arg) => {
    let index = -1;
    index = cart_items.findIndex((i) => {
      return arg.p_id === i.p_id;
    });
    return index;
  };

  const handleInc = (arg) => {
    arg.quantity++;
    let item_index = findItemIndex(arg);
    cart_items.splice(item_index, 1, arg);
    dispatch(IncreaseQuantity(cart_items));
  };

  const handleDec = (arg) => {
    let item_index = findItemIndex(arg);
    if (arg.quantity > 1) {
      arg.quantity--;
      cart_items.splice(item_index, 1, arg);
    } else {
      cart_items.splice(item_index, 1);
    }
    dispatch(DecreaseQuantity(cart_items));
  };

  return (
    <div className="item-in-cart">
      <ul>
        {cart_items.map((i, index) => {
          return (
            <li key={i.p_id}>
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
                  <AiFillCloseCircle
                    onClick={() => {
                      props.handleRemove(index);
                    }}
                  />
                </div>
              </div>
              <div>{i.new_price}</div>
              <div>
                <button
                  className="add-drop"
                  onClick={() => {
                    handleDec(i);
                  }}
                >
                  -
                </button>
                {i.quantity}
                <button
                  className="add-drop"
                  onClick={() => {
                    handleInc(i);
                  }}
                >
                  +
                </button>
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
  const cart_items = useSelector((state) => state.cart_items_array);

  useEffect(() => {
    cart_items.length > 0
      ? setcartButton("Proceed to Checkout")
      : setcartButton("Start Shopping");
  }, [cart_items.length]);

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

      {!cart_items[0] && (
        <div className="cart-content">
          <div>
            <h4>No items in your cart</h4>
          </div>
          <div>
            <p>Your favourite items are just a click away.</p>
          </div>
        </div>
      )}

      {cart_items[0] && (
        <div>
          <CartItem items={cart_items} handleRemove={props.handleRem} />
        </div>
      )}

      <div className="cart-div">
        <button className="button4 cart-button">{cartButton}</button>
      </div>
    </div>
  );
};
export default Cart;
