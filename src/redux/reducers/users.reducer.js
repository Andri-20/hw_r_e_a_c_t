import {Load_single_user, Load_users} from "../actions";

let usersReducer = (state = {users: [], user: null}, action) => {
    const {type, payload} = action;

    switch (type) {
        case Load_users:
            return {...state, users: payload}
        case Load_single_user:
            const user = state.users.find(user => user.id === payload)
            return {...state, user}
        default:
            console.log("error");
            return state

    }


}
export {usersReducer}