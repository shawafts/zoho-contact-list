import axios from "axios";

import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    console.log("Logging the error:", error);
    toast.error("An unexpected error occured");
  }
  return Promise.reject(error);
});

function setToken(token) {
  axios.defaults.headers.common["Authorization"] = `Zoho-authtoken ${token}`;
}

function setCors() {
  axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
  axios.defaults.headers.common["Access-Control-Request-Method"] = "GET";
  axios.defaults.headers.common["Access-Control-Request-Headers"] =
    "Authorization";
}

export default {
  get: axios.get,
  setToken: setToken,
  setCors: setCors,
  //   put: axios.put,
};
