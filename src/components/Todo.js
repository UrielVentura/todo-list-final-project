import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
const Todo = () => {
  const todosItems = useSelector(state => state.todo.todos);
  const [todo, setTodo] = useState('');
  //const [todoError, setTodoError] = useState(false);
  const dispatch = useDispatch();

  const setTodoStatus = todo => {
    dispatch({
      type: 'UPDATE_TODO',
      todo,
    });
  };

  const newToDoHandler = () => {
    const id = Math.random().toString(36).slice(2);
    const newTodo = {
      id,
      description: todo,
      status: 0,
    };

    /*if (todo === '') {
      setTodoError(true);
      return;
    }*/

    dispatch({
      type: 'ADD_TODO',
      todo: newTodo,
    });
    setTodo('');
  };

  return (
    <div className="todoPanel">
      <div className="newTodoForm">
        <input
          className="inputNewTodo"
          type="text"
          id="new-todo"
          placeholder="New an item..."
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
        <button
          variant="outlined"
          color="primary"
          sx={{ margin: 2 }}
          size="small"
          onClick={() => newToDoHandler()}
        >
          Add
        </button>
      </div>
      <h2>Todo Items</h2>

      <ul>
        {todosItems.map(t => (
          <li key={t.id} onClick={() => setTodoStatus(t)}>
            <input type="checkbox" id={t.id} />
            {t.description}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Todo;
