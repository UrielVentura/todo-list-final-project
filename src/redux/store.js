import {createStore,combineReducers} from 'redux';
import {persistStore,persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
    todos: [],
    done: []

};

const todoreducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_TODO":
            action.todo.status = 1;
            return {
                ...state,
                done: state.done.concat(action.todo),
                todos: state.todos.filter( todo => todo.id !== action.todo.id)
            }
        case "UPDATE_DONE":
            action.todo.status = 0;
            return {
                ...state,
                todos: state.todos.concat(action.todo),
                done: state.done.filter( todo => todo.id !== action.todo.id)
            }
        case "ADD_TODO":
            return {
                ...state,
                todos: state.todos.concat(action.todo)
            }
        default:
            return state;
    }
};

const reducer = combineReducers({
    todo: todoreducer,
});

const persistConfig = {
    key: "root",
    storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)


export const persistor = persistStore(store);
