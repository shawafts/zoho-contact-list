import React from "react";

const Pagination = ({ page, hasMorePage, handlePageChange, cssClass }) => {
  let currentPage = page;
  let isSinglePage = false;
  if (page === 1 && !hasMorePage) isSinglePage = true;
  let pages = Array.from({ length: currentPage }, (_, i) => i + 1);

  return (
    <nav aria-label="..." className={cssClass}>
      {isSinglePage ? (
        <ul className="pagination">
          <li className="page-item active">
            <span className="page-link">1</span>
          </li>
        </ul>
      ) : (
        <ul className="pagination">
          {pages.map((value, index) => {
            let style = "page-item";
            let disable = false;
            if (value === page) {
              style = style + " active";
              disable = true;
            }
            return (
              <li key={index} className={style}>
                <span
                  className="page-link"
                  onClick={() => (disable ? null : handlePageChange(value))}
                >
                  {value}
                </span>
              </li>
            );
          })}
          {hasMorePage && (
            <li className="page-item">
              <span
                className="page-link"
                onClick={() => handlePageChange(page + 1)}
              >
                Next
              </span>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Pagination;
