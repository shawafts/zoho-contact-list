import React from "react";

const TableBody = ({ data, columns }) => {
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item.contact_id}>
          {columns.map((column, index) => (
            <td key={index} className={column.style ? column.style : ""}>
              {column.prefix ? column.prefix : ""}
              {item[column.path]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
