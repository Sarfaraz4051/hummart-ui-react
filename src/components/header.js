import React from "react";
import '../index.css';
import { Link } from 'react-router-dom';
import {
    AiOutlinePhone
} from "react-icons/ai";
const Header=()=>{
    return (
        <div>
            <div className="upperbar">
                Groceries delivery in Karachi / Mobile phones,
                 Cosmetics, Toys & Electronics nationwide
            </div>
            <div>
                    <AiOutlinePhone/>
                (021) 111 116 278
                <Link to="#">Customer Care</Link>
                <Link to="#">Login</Link> 
             

            </div>
        </div>
    )
}
export default Header;
