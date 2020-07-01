import {ON_NEW_COMMENT_TEXT_CHANGE} from "../actions/addCommentAction";

export const initialState = {
    newCommentText: '',
    newCommentAuthor: '',
}

export function AddCommentReducer( state = initialState, action ) {

    switch (action.type) {
        case ON_NEW_COMMENT_TEXT_CHANGE:
            return {...state, newCommentText: action.payload}
        default:
            return state
    }
}