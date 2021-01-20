import React from "react";
import { Link } from "react-router-dom";
import {
    AiOutlineCaretRight
} from "react-icons/ai";

const Category = (props) => {
    return (
        <Link to="#">
        <div className="category-item">
            <div>
                <img src={`categories/${props.obj.img_url}`}  alt="Category-item "/>
            </div>
            <div>
                <h3>
                    {props.obj.title}
                </h3>
                <p>
                    {props.obj.des}
                </p>
            </div>
            <div>
                <AiOutlineCaretRight />
            </div>
        </div>
        </Link>
    )
}
export default Category;