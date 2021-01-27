import React, { useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Offer from "./components/offer";
import Category from "./components/category";
import Cart from "./components/cart";
import { setLocalStorageData, getLocalStorageData } from "./service";
import { offers_data, categories_data } from "./data";

const CategoriesList = () => {
  return getLocalStorageData("categories").map((category, index) => {
    return <Category key={index} obj={category} />;
  });
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
    console.log("id is " + id);
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
          <h3> Categories </h3>
        </div>
        <div className="grid-container container">
          <CategoriesList />
        </div>
      </div>

      <div className="third-last-footer ">
        <div className="container">
          <h3 className="para-heading ">
            Online Supermarket, Delivery In Karachi, Pakistan
          </h3>
          Ever wondered of entering a grocery store and getting an overview of
          products sections and get to grab the required product from there ?
          The alternate is our search bar of HumMart where you can search from a
          wide range of categories including grocery and staples, home
          furnishing, breakfast and dairy, instant foods, biscuits and snacks,
          beverages, household needs, personal care, home and kitchen, baby
          products, fruits and vegetables, ice creams and a lot more.Now with
          online phones and accessories purchase and with easy and timely home
          delivery all over Pakistan.The online shopping of grocery is a
          blessing to get the required products over a few clicks.We at HumMart
          provides our customers with the best deals to get value addition on
          the purchase of products available online as a bundle offer.If you are
          in a mood to mingle with friends but you got a grocery list in your
          pocket, just visit HumMart and order the grocery to get it delivered
          right at your home while you get yourself entertained with
          friends.Want to cook your favorite dish, no need to worry for the
          items to prepare a mouthwatering dish.HumMart offers you ample
          products to get the ingredients for the dish.We will provide you the
          products through express delivery within 2 hours.You have the
          independence to opt out from numerous products as HumMart focuses to
          bring utmost facilities through its online grocery store and adding
          value in life of our valued customers.You need to stay at your home,
          visit hummart.com through your laptop, smartphone or even from phone
          application.
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default App;