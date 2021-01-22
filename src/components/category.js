import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

const Category = (props) => {
  return (
    <div className="grid-item">
      <Link to="#" className="plain-black-link">
        <div className="category-item">
          <div>
            <img src={`categories/${props.obj.img_url}`} alt="Category-item" />
          </div>
          <div>
            <h5> {props.obj.title} </h5>
            <p> {props.obj.des} </p>
          </div>
          <div>
            <AiOutlineRight />
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Category;
