import React from "react";
import TableBody from "../common/TableBody";
import TableHeader from "../common/TableHeader";

const columns = [
  {
    label: "Name",
    path: "customer_name",
    // content: (user) => (
    //   <Link to={`/users/${user.contact_id}`}>{user.customer_name}</Link>
    // ),
    sortable: true,
  },
  { label: "Company Name", path: "company_name", sortable: false },
  { label: "Email", path: "email", sortable: true },
  { label: "Work Phone", path: "phone", sortable: false },
  { label: "GST Treatment", path: "gst_treatment", sortable: false },
  {
    label: "Receivables",
    path: "outstanding_receivable_amount",
    sortable: true,
    style: "text-right",
    prefix: "₹",
  },
  {
    label: "Payables",
    path: "outstanding_payable_amount",
    sortable: false,
    style: "text-right",
    prefix: "₹",
  },
];

const ContactsTable = (props) => {
  return (
    <div>
      <table className="table table-bordered">
        <TableHeader
          columns={columns}
          sortColumn={props.sortColumn}
          handleSort={props.handleSort}
        />
        <TableBody data={props.contacts} columns={columns} />
      </table>
    </div>
  );
};

export default ContactsTable;
