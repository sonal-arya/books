import React from "react";
import "./index.css";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
const Categories = ({ categories, filterItems }) => {
  const acitve = () => {};
  return (
    <>
      <div className="btn-container">
        <span>Book chapters</span>
        {categories.map((category, index) => {
          return (
            <>
              <button
                type="button"
                className="filter-btn"
                key={index}
                onClick={() => filterItems(category)}
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
