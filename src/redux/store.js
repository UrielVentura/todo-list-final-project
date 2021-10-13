import {createStore} from 'redux';

const initialState = {
    todos: [
        {   
            id:1,
            description: "Do the homework",
            status: 1
        },
        {
            id:2,
            description: "Do the dishes",
            status: 0
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
