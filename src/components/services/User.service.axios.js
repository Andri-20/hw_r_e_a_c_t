import {axiosService} from "./service.axios";
import {urls} from "../configs";

const userService = {
    create:(user)=>axiosService.post(urls.users, user),
    getAll:()=>axiosService.get(urls.users)
}
export {
    userService
}