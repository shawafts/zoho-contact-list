import React from "react";

const TableHeader = ({ columns, sortColumn, handleSort }) => {
  const raiseSort = (path) => {
    const sortColumnTemp = { ...sortColumn };
    if (sortColumnTemp.path === path)
      sortColumnTemp.order = sortColumnTemp.order === "A" ? "D" : "A";
    else {
      sortColumnTemp.path = path;
      sortColumnTemp.order = "A";
    }
    handleSort(sortColumnTemp);
  };

  const renderSortIcon = (column) => {
    // const { sortColumn } = this.props;
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "A") return <i className="fa fa-sort-asc"></i>;
    return <i className="fa fa-sort-desc"></i>;
  };

  return (
    <thead>
      <tr>
        {columns.map((column, index) => (
          <th
            key={index}
            className="clickable"
            onClick={() => (column.sortable ? raiseSort(column.path) : null)}
          >
            {column.label} {renderSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
