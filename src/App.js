import React, { useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Offer from "./components/offer";
import Category from "./components/category";
import Cart from "./components/cart";
import { setLocalStorageData, getLocalStorageData } from "./service";
import { offers_data, categories_data, para } from "./data";

const CategoriesList = (props) => {
  const limit = props.limitt;
  let categories = props.categories,
    arr2 = [];

  for (let i = 0; i < categories.length; i += limit) {
    arr2.push(
      <div className="grid-container">
        {categories.slice(i, i + limit).map((cate, index) => {
          return <Category key={index} obj={cate} />;
        })}
      </div>
    );
  }
  return arr2;
};

const App = () => {
  setLocalStorageData("myoffers", offers_data);
  setLocalStorageData("categories", categories_data);
  const [cartArray, setcartArray] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const HandleshowCart = () => {
    setShowCart(!showCart);
  };

  const handleRemove = (id) => {
    setcartArray((old_tasks) => {
      console.log("id is " + id);
      console.log(old_tasks);
      old_tasks.splice(id, 1);
      console.log(old_tasks);
      return [...old_tasks];
    });
  };

  const addInCart = (obj) => {
    setcartArray([...cartArray, obj]);
  };

  return (
    <div className="App">
      <Header cartItems={cartArray} HandleshowCart={HandleshowCart} />
      <div className="bundle-offers">
        {showCart && (
          <Cart
            handleShowCart={HandleshowCart}
            cartItems={cartArray}
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
