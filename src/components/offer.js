import React from "react";
import { Link } from "react-router-dom";
import '../index.css';

const Offer = (props) => {
    const handleAddItem=()=>{
        console.log('In Handle Add Item');
    }
    return (
        <div className="offer-item">
            <div >
                <Link to="#" className="offer-link">
                    <img src={`offers/${props.obj.img_src}`} className="offers-images" alt="Offer_image" />
                </Link>
            </div>
            <div>
                <Link to="#" className="offer-link">
                    {props.obj.title}
                </Link>
            </div>
            <div className="outer-divProduct">
                <div>
                    <del>{props.obj.old_price}</del>{props.obj.new_price}
                </div>
                <div>
                    <button className="button4" onClick={handleAddItem}>
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Offer;