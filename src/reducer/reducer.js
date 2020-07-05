export const reducer = (state = {}, action ) => {

    let stateCopy = {...state};
    switch (action.type) {
        case 'ADD_COMMENT':
            const time = new Date();
            const key = Math.floor(Math.random() * 100); //для key использую случайное число
            stateCopy.comments.push({
                id: key,
                commentText: state.newCommentText,
                commentAuthor: state.newCommentAuthor,
                commentTime: time.toLocaleString('ru-RU')
            })
            localStorage.setItem('localComments', JSON.stringify(stateCopy.comments));
            stateCopy.newCommentText = '';
            stateCopy.newCommentAuthor = '';
            return stateCopy

        case 'COMMENT_TEXT_CHANGE':
            stateCopy.newCommentText = action.value
            return stateCopy

        case 'COMMENT_AUTHOR_CHANGE':
            stateCopy.newCommentAuthor = action.value
            return stateCopy

        case 'REMOVE_COMMENT':
            stateCopy.comments.splice(action.key, 1);
            localStorage.setItem('localComments', JSON.stringify(stateCopy.comments));
            return stateCopy

        default:
            return state
    }
}