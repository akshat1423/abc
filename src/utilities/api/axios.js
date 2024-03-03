import axios from "axios";
// import createAuthRefreshInterceptor from "axios-auth-refresh";
//import store from "../store/store";
//import authSlice from "../store/authSlice";

const axiosAuthService = axios.create({
    baseURL: "https://staging.misadmin.mapit.ai/api",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"    
    },
});

export const axiosApiService = axios.create({
    baseURL: "https://staging.misadmin.mapit.ai/api",
    
});

// const requestInterceptor = async (config) => {
//     const { token } = store.getState().persistedAuthReducer.auth;

//     if (token !== null && token !== "") {
//         config.headers.Authorization = "Bearer " + token;
//         console.debug(
//             "[Request]",
//             config.baseURL + config.url,
//             JSON.stringify(token)
//         );
//     }
//     return config;
// };

// const responseInterceptor = (res) => {
    // console.debug(
    //     "[Response]",
    //     res.config.baseURL + res.config.url,
    //     res.status,
    //     res.data
    // );
    // res.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000';
//     return Promise.resolve(res);
// };

// const responseErrorInterceptor = (err) => {
//     console.log(err);
//     console.debug(
//         "[Response]",
//         err.config.baseURL + err.config.url,
//         err.response.status,
//         err.response.data
//     );
//     return Promise.reject(err);
// };

// axiosAuthService.interceptors.request.use(requestInterceptor);

// axiosAuthService.interceptors.response.use(
//     responseInterceptor,
//     responseErrorInterceptor
// );

//axiosApiService.interceptors.request.use(requestInterceptor);

// axiosApiService.interceptors.response.use(
//     responseInterceptor,
//     responseErrorInterceptor
// );

// const refreshAuthLogic = async (failedRequest) => {
//     const refreshToken =
//         store.getState().persistedAuthReducer.auth.refreshToken;
//     if (refreshToken !== null && refreshToken !== "") {
//         console.log(refreshToken);
//         return axios
//             .post(`${process.env.REACT_APP_AUTH_API_URL}/auth/refresh/`, {
//                 refresh: refreshToken,
//             })
//             .then((resp) => {
//                 const { access } = resp.data;
//                 failedRequest.response.config.headers.Authorization =
//                     "Bearer " + access;
//                 console.log(resp);
//                 store.dispatch(
//                     authSlice.actions.setAccessToken({
//                         token: access,
//                     })
//                 );
//             })
//             .catch((err) => {
//                 if (err.response && err.response.status === 401) {
//                     store.dispatch(authSlice.actions.setLogout());
//                 }
//                 console.log(err);
//             });
//     }
// };

// createAuthRefreshInterceptor(axiosAuthService, refreshAuthLogic, {
//     statusCodes: [401],
// });

// createAuthRefreshInterceptor(axiosApiService, refreshAuthLogic, {
//     statusCodes: [401],
// });

// export function fetcher(url) {
//     return axiosAuthService.get(url).then((res) => res.data);
// }

export default axiosAuthService;
