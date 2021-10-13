import {createStore} from 'redux';

const initialState = {
    todos: [],
    done: []

};

const reducerToDo = (state = initialState, action) => {
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


export default createStore(
    reducerToDo,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
