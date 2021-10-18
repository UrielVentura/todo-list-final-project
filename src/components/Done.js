import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Done = () => {
  const doneItems = useSelector((state) => state.todo.done);
  const dispatch = useDispatch();

  const setDoneStatus = (todo) => {
    dispatch({
      type: "UPDATE_DONE",
      todo,
    });
  };

  return (
    <div className="donePanel">
      <br />
      <h2>Done Items</h2>

      <ul>
        {doneItems.map((t) => (
          <>
            <li key={t.id} onClick={() => setDoneStatus(t)} className="checked">
              <input type="checkbox" checked id={t.id} />
              {t.description}
            </li>
            <hr />
          </>
        ))}
      </ul>
    </div>
  );
};

export default Done;
