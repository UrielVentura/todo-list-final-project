import React , {useState}from 'react';

const ToDoApp = () => {
  const [toggleState, setToggleState] = useState(1);
  

  const toggleTab = (index) => {
    setToggleState(index);
  };


  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(1)}
        >
          Todo
        </button>
        <button
          className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(2)}
        >
          Done
        </button>
      </div>

      <div className="content-tabs">
        <div className={toggleState === 1 ? 'content  active-content' : 'content'}>
          <input className="newtodo" type="text" placeholder="New an Item..."/>
          <h2>Todo</h2>
          <hr/>
          <br/>
          <div className="todolist">
            <div className="do">
              <input type="checkbox"/> 
              <label>Task 1</label>
            </div>

            <div className="do">
              <input type="checkbox"/> 
              <label>Task 1</label>
            </div>


            <div className="do">
              <input type="checkbox"/> 
              <label>Task 1</label>
            </div>
          </div>
        </div>

        <div
          className={toggleState === 2 ? 'content  active-content' : 'content'}>
          <h2>Done ✅</h2>

        </div>
      </div>
    </div>
  );
};

export default ToDoApp;
