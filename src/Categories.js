import React from 'react';

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {/* rucno ubacivanje dugmica za filtriranje */}
      {/* <button className="filter-btn" onClick={() => filterItems('all')}>
        all
      </button>
      <button className="filter-btn" onClick={() => filterItems('breakfast')}>
        breakfast
      </button> */}
      {/* dinamicko ubacivanje dugmica */}
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
