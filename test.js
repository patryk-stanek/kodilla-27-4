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



///////////

//tworzenie store'a
//reduktor stojący najwyżej w herarchii powinien być przekazywany do funkcji createStore która utworzy całe drzewo repezentujące stan
import { createStore } from 'redux';
import reducers from './reducers.js';

//funkcja createStore jako drugi argument może przyjmować wartość początkową stanu
const store = createStore(reducers);

//wywołuje przykładową funkcję po każdej modyfikacji store/magazynu;
store.subscribe(() => console.log('zmiana w stanie'));

//odpięcie listenera logującego informację o zmiana w konsoli można wykonwać poprzez wywołanie funkcji zwracanej przez metodą store.subscribe()
//podpięcie tego pod zmienną ułatwia życie
var unsubscribe = store.subscribe(() => console.log('zmiana w stanie'));
unsubscribe();

//zwracanie stanu aplikacji
store.subscribe(() => console.log(store.getState()));

//wysyłanie informacji o akcji do store
store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));

//--------------------

store.subscribe(() => {
    const comments = store.getState().comments;
    ReactDOM.render(<CommentsList comments={comments} />, mountingPoint)
});