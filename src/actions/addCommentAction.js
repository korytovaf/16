export const ON_NEW_COMMENT_TEXT_CHANGE = 'ON_NEW_COMMENT_TEXT_CHANGE'
export const ON_NEW_COMMENT_AUTHOR_CHANGE = 'ON_NEW_COMMENT_AUTHOR_CHANGE'

export function onNewCommentTextChange(newCommentText) {
    return {
        type: ON_NEW_COMMENT_TEXT_CHANGE,
        payload: newCommentText,
    }
}

export function onNewCommentAuthorChange(newCommentAuthor) {
    return {
        type: ON_NEW_COMMENT_AUTHOR_CHANGE,
        payload: newCommentAuthor,
    }
}