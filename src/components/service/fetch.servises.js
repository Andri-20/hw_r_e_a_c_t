import {baseURL, urls} from '../config';

const getTodos = () => {
    return fetch(baseURL + urls.todos)
        .then(value => value.json())
}
const getAlbums = () => {
    return fetch(baseURL + urls.albums)
        .then(value => value.json())
}
const getComments = () => {
    return fetch(baseURL + urls.comments)
        .then(value => value.json())
}
const getPosts = () => {
    return fetch(baseURL + urls.posts)
        .then(value => value.json())
}
const getPost =(id)=>{
    return fetch(baseURL+urls.posts+'/'+id)
        .then(value =>value.json())
}
export {getTodos,getPosts,getAlbums,getComments,getPost}