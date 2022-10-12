import {Load_comments} from "../actions";

let commentsReducer = (state = {comments: []}, action) => {
    const {type, payload} = action;
    switch (type) {
        case Load_comments:
            return {...state, comments: payload}
        default:
            console.log("error");
            return state;
    }
}
export {commentsReducer}