import {combineReducers} from "redux";

import {usersReducer} from "../reducers/users.reducer";
import {postsReducer} from "../reducers/posts.reducer";
import {commentsReducer} from "../reducers/comment.reducer";


let reducer = combineReducers({
    usersReducer,
    postsReducer,
    commentsReducer});
export {reducer};