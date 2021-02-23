import React, { useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Offer from "./components/offer";
import Category from "./components/category";
import Cart from "./components/cart";
import { setLocalStorageData, getLocalStorageData } from "./service";
import { offers_data, categories_data, para } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { AddItem, DeleteItem, IncreaseQuantity } from "./action";

const CategoriesList = (props) => {
  const limit = props.limitt;
  let categories = props.categories,
    categories_chuck = [];

  for (let i = 0; i < categories.length; i += limit) {
    categories_chuck.push(
      <div className="grid-container">
        {categories.slice(i, i + limit).map((cate, index) => {
          return <Category key={index} obj={cate} />;
        })}
      </div>
    );
  }
  return categories_chuck;
};

const App = () => {
  setLocalStorageData("myoffers", offers_data);
  setLocalStorageData("categories", categories_data);
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const cart_items = useSelector((state) => state.cart_items_array);

  const HandleshowCart = () => {
    setShowCart(!showCart);
  };

  const handleRemove = (id) => {
    cart_items.splice(id, 1);
    dispatch(DeleteItem(cart_items));
  };

  const addInCart = (obj) => {
    let index = cart_items.findIndex((o) => {
      return o.p_id === obj.p_id;
    });
    console.log(index);
    if (index === -1) {
      dispatch(AddItem(obj));
    } else {
      cart_items[index].quantity++;
      cart_items.splice(index, 1, cart_items[index]);
      dispatch(IncreaseQuantity(cart_items));
    }
  };

  return (
    <div className="App">
      <Header cartItems={cart_items} HandleshowCart={HandleshowCart} />
      <div className="bundle-offers">
        {showCart && (
          <Cart
            handleShowCart={HandleshowCart}
            cartItems={cart_items}
            handleRem={handleRemove}
          />
        )}
        <div>
          <h3>NEW BUNDLE OFFERS </h3>
        </div>
        <div className="myProductSt">
          {getLocalStorageData("myoffers").map((offer, index) => {
            return <Offer key={index} obj={offer} handleClick={addInCart} />;
          })}
        </div>
      </div>

      <div className="bg-color making-flex">
        <div>
          <h3 className="container"> Categories </h3>
        </div>
        <div className="container">
          <CategoriesList
            limitt={3}
            categories={getLocalStorageData("categories")}
          />
        </div>
      </div>

      <div className="third-last-footer ">
        <div className="container">
          <h3 className="para-heading ">
            Online Supermarket, Delivery In Karachi, Pakistan
          </h3>
          {para}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default App;
