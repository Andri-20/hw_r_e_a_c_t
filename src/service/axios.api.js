import axios from "axios";

let axiosInstance = axios.create({
    baseURL:'https://api.spacexdata.com/v3/launches/'
});
let getRocketsAxios = axiosInstance.get();
export {getRocketsAxios}