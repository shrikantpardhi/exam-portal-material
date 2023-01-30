import axios from "axios";
const BASE_URL = "http://localhost:9090/api/v1/";
const access =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJleHAiOjE2NzUxMTEzMTgsImlhdCI6MTY3NTA5MzMxOH0.s9Dj58_7qlMlppFYbod8Io99wNRy7fwPEm8QCwSaxCe9KfR-QNZBL_mNTtTpJkBot7OPOaYUlTUGIiP9ACYzjQ";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

axiosPrivate.interceptors.request.use(
  (config) => {
    const token = access;
    if (!config.headers["Authorization"]) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosPrivate.interceptors.response.use(
  (response) => response,
  async (error) => {
    const prevRequest = error.config;

    if (error.response.status === 401 && !prevRequest._retry) {
      prevRequest._retry = true;
      const refreshToken = access;

      // get new token and use for later
      return axiosPrivate(prevRequest);
    }
    // if (error.response.status === 403 && !prevRequest.sent) {
    //   prevRequest.sent = true;
    //   const refreshToken =
    //     "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJleHAiOjE2NzUwNzQ4ODQsImlhdCI6MTY3NTA1Njg4NH0.Bxf9igSvTZY5E04HsqaxNqiAcx_J87qqww6Uef26UsqQAS2ne1JV8dwmGVc184IKpzQ3k3M-gR4p7PnKgqZ9qg";

    //   prevRequest.headers[
    //     "Authorization"
    //   ] = `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJleHAiOjE2NzUwNzQ4ODQsImlhdCI6MTY3NTA1Njg4NH0.Bxf9igSvTZY5E04HsqaxNqiAcx_J87qqww6Uef26UsqQAS2ne1JV8dwmGVc184IKpzQ3k3M-gR4p7PnKgqZ9qg`;
    //   return axiosPrivate(prevRequest);
    // }

    return Promise.reject(error);
  }
);
