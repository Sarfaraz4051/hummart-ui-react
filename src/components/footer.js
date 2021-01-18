import React from "react";
import { Link } from 'react-router-dom';
import { AiFillCaretRight } from "react-icons/ai";


const Footer = () => {
    return (
        <>
        <div>
            <div>HUMMART</div>
            <div>
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

        <div>
            <div>HELP</div>
            <div>
                <div>
                    <AiFillCaretRight />
                    <Link to="#">FAQs</Link>
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



        <div>
            <div>CONTACT INFORMATION</div>
            <div >PHONE</div>
            (021) 111 116 278
            <div>EMAIL</div>
            <div>
                <Link to="#">customer@hummart.com</Link>
            </div>
            <div>WORKING DAYS/HOURS</div>
            Mon - Sun /9:00AM - 9:00PM
        </div>

</>
    )
}
export default Footer;