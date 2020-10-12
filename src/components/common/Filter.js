import React from "react";

const Filter = ({
  selectedFilter,
  onChange,
  filterOptions,
  cssClass,
  text,
}) => {
  return (
    <div className={cssClass}>
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        data-toggle="dropdown"
      >
        {selectedFilter} {text && text}
        <span className="caret"></span>
      </button>
      <ul className="dropdown-menu">
        {filterOptions.map((value, index) => (
          <li
            key={index}
            className="dropdown-item"
            onClick={() => onChange(value)}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
