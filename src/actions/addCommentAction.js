

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