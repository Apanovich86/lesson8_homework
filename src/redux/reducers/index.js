import {rootReducer} from "./rootReducer";
import {someReducer} from "./someReducer";
import {combineReducers} from 'redux';

let reducer = combineReducers({someReducer, rootReducer});
export {reducer}