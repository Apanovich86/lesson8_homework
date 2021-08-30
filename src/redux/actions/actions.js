import {FETCH_USERS, PUSH_USER} from "./actionTypes";


const fetch_Users =(value) => {
    return {type:FETCH_USERS, payload: value}
}
const pushUser = (value) => {
    return {type: PUSH_USER, payload: value}
}
export {fetch_Users, pushUser};