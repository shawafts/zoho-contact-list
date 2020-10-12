import React from "react";
import Filter from "../common/Filter";
import Pagination from "../common/Pagination";

const filterOptions = [2, 5, 10, 20, 50];

const ContactsTableFooter = ({
  page,
  hasMorePage,
  handlePageChange,
  perPage,
  handleSizeChange,
}) => {
  return (
    <div className="container">
      <div className="row">
        <Filter
          selectedFilter={perPage}
          onChange={handleSizeChange}
          filterOptions={filterOptions}
          cssClass="col-2"
          text="Per Page"
        />
        <Pagination
          page={page}
          hasMorePage={hasMorePage}
          handlePageChange={handlePageChange}
          cssClass="col-2"
        />
      </div>
    </div>
  );
};

export default ContactsTableFooter;
