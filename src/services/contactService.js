import http from "./http";
import { apiUrl, organizationId } from "../config.json";

export async function getContacts(page, perPage, filter, sortColumn) {
  let response;
  try {
    response = await http.get(apiUrl, {
      params: {
        organization_id: organizationId,
        page: page,
        per_page: perPage,
        filter_by: `Status.${filter}`,
        sort_column: sortColumn.path,
        sort_order: sortColumn.order,
      },
    });
    console.log("Data:", response.data);
    return response.data;
  } catch (error) {
    console.log("Error", error);
    return { contacts: [], page_context: { has_more_page: false } };
  }
}
