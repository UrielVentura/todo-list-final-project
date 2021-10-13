import {createStore} from 'redux';

const initialState = {
    todos: [
        {
            name: "Do the homework",
            status: 1
        },
        {
            name: "Do the dishes",
            status: 1
        }
    ],
    done: []

};

const reducerToDo = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};


export default createStore(
    reducerToDo,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
