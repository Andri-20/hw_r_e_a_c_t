import {axiosService} from "./service.axios";
import {urls} from "../configs";

const commentsService = {
    getAll:()=>axiosService.get(urls.comments),
    create:(comment)=>axiosService.post(urls.comments, comment),
}
export{commentsService}