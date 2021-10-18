import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
const Todo = () => {
  const todosItems = useSelector(state => state.todo.todos);
  const [todo, setTodo] = useState('');
  const [todoError, setTodoError] = useState(false);
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

    if (todo === '') {
      setTodoError(true);
      return;
    }

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
          className={todoError ? 'inputNewTodo inputError' : 'inputNewTodo'}
          type="text"
          id="new-todo"
          placeholder="New an item..."
          value={todo}
          onChange={e => {
            setTodo(e.target.value);
            setTodoError(false);
          }}
        />
        <button
          className="addBtn"
          variant="outlined"
          color="primary"
          size="small"
          onClick={() => newToDoHandler()}
        >
          Add
        </button>
        <br />
        {todoError ? (
          <label style={{ color: 'red', fontSize: '12px' }}>
            This field must not be empty
          </label>
        ) : (
          <div></div>
        )}
      </div>

      <h2 style={{ margin: '100px' }}>Todo Items</h2>

      <ul>
        {todosItems.map(t => (
          <div key={t.id}>
            <li onClick={() => setTodoStatus(t)} className="listItem">
              <input type="checkbox" id={t.id} />
              {t.description}
            </li>
            <hr />
          </div>
        ))}
      </ul>
    </div>
  );
};
export default Todo;
