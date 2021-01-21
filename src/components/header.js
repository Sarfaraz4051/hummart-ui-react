import React, { useState } from "react";
import '../index.css';
import SearchBar from './searchBar';
import Slidesshow from './slideshow';
import { Link } from 'react-router-dom';
import {
    AiOutlinePhone, AiOutlineShoppingCart, AiFillCar, AiFillMoneyCollect, AiTwotonePhone
} from "react-icons/ai";
import hummartLogo from '../images/humlogo.png';
import toysGif from '../images/Toys_Gif.gif';
import pic1 from '../images/pic1.jpg';
import pic2 from '../images/pic2.jpg';


const Header = () => {
    const [showinfo, setShowinfo] = useState(false);


    return (
        <>
            <div className="upperbar">
                Groceries delivery in Karachi / Mobile phones,
                Cosmetics, Toys & Electronics nationwide
            </div>

            <div className="upperbar-two">
                <AiOutlinePhone />
                        (021) 111 116 278
                    <Link to="#">Customer Care</Link>
                <Link to="#">Login</Link>
            </div>

            <div className="nav-upper container">
                <div>
                    <img src={hummartLogo} alt="HummartLogo" />
                </div>

                <div>
                    <SearchBar />
                </div>
                <div>
                    <img src={toysGif} alt="Toys Giff" />
                </div>
                <div className="cart-icon">
                    <AiOutlineShoppingCart />
                </div>
            </div>

            <div className="nav container">
                <ul>
                    <li>
                        <Link to="#">GROCERY & STAPLES</Link>
                    </li>
                    <li>
                        <Link to="#">NOODLES SAUCES & FROZEN FOODS</Link>
                    </li>
                    <li>
                        <Link to="#">BISCUITS SNACKS & CHOCOLATES</Link>
                    </li>
                    <li>
                        <Link to="#">BREAKFAST & DAIRY</Link>
                    </li>
                    <li>
                        <Link to="#">BABY KIDS & TOYS</Link>
                    </li>
                    <li>
                        <Link to="#">BEVERAGES</Link>
                    </li>
                    <li>
                        <Link to="#" onMouseOver={() => {
                            setShowinfo(true);

                        }} onMouseOut={() => {
                            setShowinfo(false);
                        }}>MORE</Link>
                    </li>

                </ul>


                {showinfo &&
                    <div className="sub-menu">
                        <div className="menu-row">
                            <div className="col">
                                <div className="col-item"><Link to="#">FRUITS & VEGETABLES</Link> </div>
                                <div className="col-item"><Link to="#">PERSONAL CARE </Link>
                                </div>
                                <div className="col-item"><Link to="#"> FURNISHING & HOME NEED </Link> </div>
                                <div className="col-item"><Link to="#"> ICE CREAMS </Link>
                                </div>
                            </div>

                            <div className="col">
                                <div className="col-item"><Link to="#"> HOME SERVICES </Link></div>
                                <div className="col-item"><Link to="#"> PHARMA</Link></div>
                                <div className="col-item"><Link to="#"> PET CARE </Link></div>
                                <div className="col-item"> <Link to="#"> OTHER CATEGORIES </Link> </div>
                            </div>

                            <div className="col">
                                <div className="col-item"><Link to="#">MOBILES TABLETS & LAPTOPS </Link> </div>
                                <div className="col-item"><Link to="#">HOUSEHOLD NEEDS </Link></div>
                                <div className="col-item"><Link to="#">MEAT & SEAFOOD </Link></div>
                                <div className="col-item"><Link to="#">CORONA ESSENTIALS </Link></div>
                            </div>

                            <div className="col">
                                <div className="col-item"><Link to="#">ELECTRONICS </Link></div>
                                <div className="col-item"><Link to="#">HOME & KITCHEN </Link></div>
                                <div className="col-item"><Link to="#">OFFERS </Link></div>
                            </div>

                        </div>
                    </div>
                }
            </div>
            

             
                <div className="offers container">
                    <div className="side-pics ">
                        <div>
                            <img src={pic1} alt="Pic1" />
                        </div>
                        <div>
                            <img src={pic2} alt="Pic2" />
                        </div>
                    </div>

                    <div className="slideshow-container">
                      <Slidesshow />
                    </div>
            </div>




            <div className="info">
                <div className="info-block ">
                    <div className="icon-style">
                        <AiFillCar />
                    </div>
                    <div className="info-item">
                        <div className="info-heading ">
                            <h3>Same/Next Day Delivery</h3>
                        </div>
                        <div className="info-content">
                            <p>Free delivery on all orders over Rs. 3,000</p>
                            <p>Rs 100 for orders below Rs. 3,000</p>
                            <p>Flat Rs 200 for Same Day orders</p>
                        </div>

                    </div>
                </div>


                <div className="info-block">
                    <div className="icon-style">
                        <AiFillMoneyCollect />
                    </div>
                    <div className="info-item">
                        <div className="info-heading ">
                            <h3>Cash On Delivery</h3>
                        </div>
                        <div className="info-content">
                            You pay when rider comes at your address.
                    </div>
                    </div>
                </div>


                <div className="info-block ">
                    <div className="icon-style">
                        <AiTwotonePhone />
                    </div>
                    <div className="info-item ">
                        <div className="info-heading ">
                            <h3>Online Support</h3>
                        </div>
                        <div className="info-content">
                            <p>Customer support from 9AM - Midnight</p>
                            <p>(021)111 116 278</p>
                        </div>
                    </div>
                </div>
            </div>{/* End info div */}




        </>
    )
}
export default Header;
