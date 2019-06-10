import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

export function addComment(text) {
    return {
        type: ADD_COMMENT,
        text: text,
        id: uuid.v4,
        votes: 0,
    }
};

export function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        text: text,
        id: id
    }
}

export function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: id
    }
}

export function thumbUp(id) {
    return {
        type: THUMB_UP_COMMENT,
        id: id
    }
}

export function thumbDown(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: id
    }
}

export default {
    addComment,
    editComment,
    removeComment,
    thumbUp,
    thumbDown
}