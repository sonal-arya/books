import React from "react";
import "./index.css";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
const Categories = ({ categories, filterItems ,value}) => {
  return (
    <>
      <div className="btn-container">
        <span>Book chapters</span>
        {categories.map((category, index) => {
    console.log("sidebar",value,category);
         
         return (
            <>
              <button
                type="button"
                className={value===category?'filter-btn-select':'filter-btn'}
                key={index}
                onClick={() => {
                 filterItems(category)}}
              >
                <AutoStoriesIcon />
                {category}
              </button>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
