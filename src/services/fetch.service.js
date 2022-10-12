import {baseUrl, urls} from "../config";

const getUsers = () => {
    return fetch(baseUrl + urls.users)
        .then(value => value.json())
}
const getCurrentUser = (id) => {
    return fetch(baseUrl + urls.users + '/' + id)
        .then(value => value.json())
}
let getComments = () => {
    return fetch(baseUrl+urls.comments)
        .then(value => value.json())
};
const getPosts = () => {
    return fetch(baseUrl+urls.posts)
        .then(value => value.json())
}
export {getUsers,getPosts,getComments,getCurrentUser}