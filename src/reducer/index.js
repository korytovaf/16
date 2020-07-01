import {combineReducers} from "redux";
import {AddCommentReducer} from "./AddCommentReducer";


export const rootReducer = combineReducers({
    addComment: AddCommentReducer,
})