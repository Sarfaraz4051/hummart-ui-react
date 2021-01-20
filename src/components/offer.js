import React from "react";
import { Link } from "react-router-dom";
import '../index.css';

const Offer=(props)=>{
    return (
    <div>
        <div >
            <Link to="#">   
                <img src= {`offers/${props.obj.img_src}`} className="offers-images" alt="Offer_image"/>
            </Link>
        </div>
        <div>
            <Link to="#">   
                {props.obj.title}
            </Link>
        </div>
        <div className="outer-divProduct">
            <div>
                <del>{props.obj.old_price}</del>{props.obj.new_price}
            </div>
            <div>
                <button className="button4">
                    ADD TO CART
                </button>
            </div>
        </div>    
    </div>
    )
}
export default Offer;