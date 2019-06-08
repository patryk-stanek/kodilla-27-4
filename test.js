function reducer(state = initialState, action) {
    switch(action.typ) {
        case ADD_COMMENT:
            //object.assign tworzy kopię stanu, pierwszym argumentem jest {} który jest nowym obiektem do którego będziemy dodawać nowe właściwości zaś drugim parametrem są obiekty źródłowe na podstawie których tworzona jest kopia - state
            return Object.assign({}, state, {
                comments: [
                    {
                        id: action.id,
                        text: action.text,
                        votes: 0
                    },
                    ...state
                ]
            });
        case REMOVE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== a)
            });
        case EDIT_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.map(comment => {
                    if(comment.id === action.id) {
                        return {
                            ...comment,
                            text: action.text
                        }
                    }
                    return comment;
                })
            });
        case THUMB_UP_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.map(comment => {
                    if(comment.id === action.id) {
                        return {
                            ...comment,
                            votes: votes + 1
                        }
                    }
                    return comment;
                })
            });
        case THUMB_DOWN_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.map(comment => {
                    if(comment.id === action.id) {
                        return {
                            ...comment,
                            votes: votes - 1
                        }
                    }
                    return comment;
                })
            });
        default:
            return state;
    }
}