import {Load_posts} from "../actions";

let postsReducer = (state = {posts: []}, action) => {
    const {type, payload} = action;

    switch (type) {
        case Load_posts:
            return {...state, posts: payload}
        default:
            console.log("error");
            return state;
    }
}
export {postsReducer};