import React, { useState, useEffect } from "react";
import Filter from "../common/Filter";
import ContactsTable from "./contactsTable";
import { getContacts } from "../../services/contactService";
import Loading from "../common/Loading";
import ContactsTableFooter from "./contactsTableFooter";
import NoData from "../common/NoData";

const filterOptions = ["All", "Active", "Inactive", "Duplicate", "Crm"];

const Contacts = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [hasMorePage, setHasMorePage] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [sortColumn, setSortColumn] = useState({
    path: "contact_name",
    order: "A",
  });
  const [loading, setLoading] = useState(false);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      let data = await getContacts(page, perPage, selectedFilter, sortColumn);
      setContacts(data.contacts);
      setHasMorePage(data.page_context.has_more_page);
      setLoading(false);
    }
    fetchData();
  }, [page, perPage, selectedFilter, sortColumn]);

  const handlePageChange = (page) => {
    setPage(page);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const handleSizeChange = (size) => {
    setPerPage(size);
  };

  const handleSort = (sortColumnTemp) => {
    setSortColumn(sortColumnTemp);
  };

  if (loading) return <Loading />;
  return (
    <div className="container">
      <Filter
        selectedFilter={selectedFilter}
        onChange={handleFilterChange}
        filterOptions={filterOptions}
        cssClass="container py-4"
      />
      {contacts.length > 0 ? (
        <div>
          <ContactsTable
            contacts={contacts}
            sortColumn={sortColumn}
            handleSort={handleSort}
          />
          <ContactsTableFooter
            page={page}
            hasMorePage={hasMorePage}
            handlePageChange={handlePageChange}
            perPage={perPage}
            handleSizeChange={handleSizeChange}
          />
        </div>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default Contacts;
