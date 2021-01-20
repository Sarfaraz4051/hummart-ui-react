import React, { useState } from "react";
import '../index.css';
import SearchBar from './searchBar';
import { Link } from 'react-router-dom';
import {
    AiOutlinePhone, AiOutlineShoppingCart, AiOutlineLeft, AiOutlineRight, AiFillCar, AiFillMoneyCollect, AiTwotonePhone
} from "react-icons/ai";
import hummartLogo from '../images/humlogo.png';
import toysGif from '../images/Toys_Gif.gif';
{/* 
import pic1 from '../images/pic1.jpg';
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.jpg';
import pic4 from '../images/pic4.jpg';
import pic5 from '../images/pic5.jpg';
import pic6 from '../images/pic6.jpg';
import pic7 from '../images/pic7.jpg';
import pic8 from '../images/pic8.jpg';
import pic9 from '../images/pic9.jpg';
import pic10 from '../images/pic10.jpg';
import pic11 from '../images/pic11.jpg';

import offer1 from '../images/offers/1.jpg';
import offer2 from '../images/offers/2.jpg';
import offer3 from '../images/offers/3.jpg';
import offer4 from '../images/offers/4.jpg';
import offer5 from '../images/offers/5.jpg';
*/}



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


            {/* 
                <div className="offers">
                    <div className="side-pics">
                        <div>
                            <img src={pic1} alt="Pic1" />
                        </div>
                        <div>
                            <img src={pic2} alt="Pic2" />
                        </div>
                    </div>


                    <div className="slideshow-container">

                        <div className="mySlides fade">
                            <img src={pic3} alt="Pic3" />
                        </div>

                        <div className="mySlides fade">
                            <img src={pic4} alt="Pic4" />
                        </div>

                        <div className="mySlides fade">
                            <img src={pic5} alt="Pic5" />
                        </div>

                        <div className="mySlides fade">
                            <img src={pic6} alt="Pic6" />
                        </div>

                        <div className="mySlides fade">
                            <img src={pic7} alt="Pic7" />
                        </div>
                        <div className="mySlides fade">
                            <img src={pic8} alt="Pic8" />
                        </div>

                        <div className="mySlides fade">
                            <img src={pic9} alt="Pic9" />
                        </div>

                        <div className="mySlides fade">
                            <img src={pic10} alt="Pic10" />
                        </div>

                        <div className="mySlides fade">
                            <img src={pic11} alt="Pic11" />
                        </div>


                        <div >
                            <span className="dot" onClick="currentSlide(1)"></span>
                            <span className="dot" onClick="currentSlide(2)"></span>
                            <span className="dot" onClick="currentSlide(3)"></span>
                            <span className="dot" onClick="currentSlide(4)"></span>
                            <span className="dot" onClick="currentSlide(5)"></span>
                            <span className="dot" onClick="currentSlide(6)"></span>
                            <span className="dot" onClick="currentSlide(7)"></span>
                            <span className="dot" onClick="currentSlide(8)"></span>
                            <span className="dot" onClick="currentSlide(9)"></span>
                        </div>

                        <Link className="prev" onClick="plusSlides(-1)"><AiOutlineLeft /></Link>
                        <Link className="next" onClick="plusSlides(1)"><AiOutlineRight /></Link>
                    </div>


            </div>*/}




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
