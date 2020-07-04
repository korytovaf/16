export const AddCommentReducer = ( state = {}, action ) => {

    let stateCopy = {...state};

    switch (action.type) {

        case 'COMMENT_TEXT_CHANGE':
            stateCopy.newCommentText = action.value
            return stateCopy

        case 'COMMENT_AUTHOR_CHANGE':
            stateCopy.newCommentAuthor = action.value
            return stateCopy

        default:
            return state
    }
}