export const commentTextChange = (value) => {
    return {
        type: 'COMMENT_TEXT_CHANGE',
        value: value.currentTarget.value
    }
}

export const commentAuthorChange = (value) => {
    return {
        type: 'COMMENT_AUTHOR_CHANGE',
        value: value.currentTarget.value
    }
}

export const addComment = ( id, commentText, commentAuthor, commentTime ) => {
    return {
        type: 'ADD_COMMENT',
        commentText,
        commentAuthor,
        commentTime,
    }
}

export const removeComment = ( key ) => {
    return {
        type: 'REMOVE_COMMENT',
        key
    }
}