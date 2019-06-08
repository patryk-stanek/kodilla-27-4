import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

{
    comments: [
        {
            id: 1,
            text: 'ABC',
            votes: 0
        },
        {
            id: 2,
            text: 'DEF',
            votes: 0
        }
    ]
    users: [
        {
            id: 1,
            name: 'Larry'
        },
        {
            id: 2,
            name: 'Frank'
        }
    ]
}

{
    type: ADD_COMMENT;
    text: 'text';
    id: 1
}

{
    type: EDIT_COMMENT;
    text: 'text';
    id: 1
}

{
    type: REMOVE_COMMENT;
    id: 1
}

{
    type: THUMB_UP_COMMENT;
    id: 1;
    votes: votes + 1
}

{
    type: THUMN_DOWN_COMMENT;
    id: 1;
    votes: votes-1
}

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4,
        votes: 0
    }
}

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        text: text,
        id: id
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: id
    }
}

function thumbUp(id) {
    return {
        type: THUMB_UP_COMMENT,
        id: id,
        votes: votes + 1
    }
}

function thumbDown(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: id,
        votes: votes - 1
    }
}