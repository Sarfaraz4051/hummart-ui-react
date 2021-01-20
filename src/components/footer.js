import React from "react";
import '../index.css';
import { Link } from 'react-router-dom';
import {
    AiFillCaretRight, AiFillFacebook, AiFillTwitterSquare, AiFillInstagram,
    AiFillLinkedin, AiFillYoutube, AiFillGooglePlusSquare
} from "react-icons/ai";
import easy from '../images/easy.png';
import jazz from '../images/jazz.png';
import visa from '../images/VISA.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-one">


                <div className="block">
                    <div className="block-title">HUMMART</div>
                    <div className="block-content">
                        <div>
                            <AiFillCaretRight />
                            <Link to="#">About Us</Link>
                        </div>
                        <div>
                            <AiFillCaretRight />
                            <Link to="#">Careers</Link>
                        </div>
                        <div>
                            <AiFillCaretRight />
                            <Link to="#">Sell on HumMart</Link>
                        </div>
                        <div>
                            <AiFillCaretRight />
                            <Link to="#">Terms & Conditions</Link>
                        </div>
                        <div>
                            <AiFillCaretRight />
                            <Link to="#">Privacy Policy</Link>
                        </div>
                    </div>
                </div>

                <div className="block">
                    <div className="block-title">HELP</div>
                    <div className="block-content">
                        <div >
                            <AiFillCaretRight />
                            <Link to="#" className="linkk">FAQs</Link>
                        </div>
                        <div>
                            <AiFillCaretRight />
                            <Link to="#">How to Order</Link>
                        </div>
                        <div>
                            <AiFillCaretRight />
                            <Link to="#">How to Pay</Link>
                        </div>
                        <div>
                            <AiFillCaretRight />
                            <Link to="#">Return & Refunds</Link>
                        </div>
                        <div>
                            <AiFillCaretRight />
                            <Link to="#">Contact us</Link>
                        </div>
                        <div>
                            <AiFillCaretRight />
                            <Link to="#">Delivery</Link>
                        </div>
                        <div>
                            <AiFillCaretRight />
                            <Link to="#">Easy Paisa</Link>
                        </div>
                    </div>
                </div>



                <div className="block">
                    <div className="block-title">CONTACT INFORMATION</div>
                    <div className="block-content">
                        <div >PHONE</div>
                    (021) 111 116 278
                    <div>EMAIL</div>
                        <div>
                            <Link to="#">customer@hummart.com</Link>
                        </div>
                        <div>
                            WORKING DAYS/HOURS
                    </div>
                    Mon - Sun /9:00AM - 9:00PM

                    <div>
                            <AiFillFacebook />
                            <AiFillTwitterSquare />
                            <AiFillLinkedin />
                            <AiFillInstagram />
                            <AiFillYoutube />
                            <AiFillGooglePlusSquare />
                        </div>
                    </div>
                </div>

                <div className="block">
                    <div className="block-title">MOBILE APPS</div>
                    <div className="block-content">
                        <div>
                            <AiFillCaretRight />
                            <Link to="#">Download from Google</Link>
                        </div>
                        <div>
                            <AiFillCaretRight />
                            <Link to="#">Download from IOS</Link>
                        </div>
                    </div>
                </div>

            </div>{/* end footer class here*/}

            <div className="footer-two container">
                <div>
                    ©Hummart.com 2020. All Rights Reserved
                    Powered By <Link to="https://www.matechco.com/">Matech CO</Link>
                </div>
                <div>
                    <img src={easy} alt="easypaisa" />
                    <img src={jazz} alt="JaazCash" />
                    <img src={visa} alt="Visa" />
                </div>
            </div>



        </div>
    )
}
export default Footer;