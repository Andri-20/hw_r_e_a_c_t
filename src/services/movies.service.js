import {axiosService} from "./axios.service";
import {urls} from "../configs";

const moviesService = {
    getAll: (page) => axiosService.get(`${urls.movies}/?page=${page}`),
}
export {moviesService};
