import React from "react";
import '../index.css';

const Offer=(props)=>{
    return (
    <div>
        <div >
            <img src= {`offers/${props.obj.img_src}`} className="offers-images" alt="Offer_image"/>
        </div>
        <div>
            {props.obj.title}
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