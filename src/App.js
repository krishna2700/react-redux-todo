import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction, deleteTodoAction } from "./Redux/Actions/TodoActions";

function App() {
  const [name, setName] = useState();
  const dispatch = useDispatch();

  // Getting the global data.
  const userData = useSelector((state) => state.userReducer);

  const todosData = useSelector((state) => state.TodoReducers);

  return (
    <div style={{ textAlign: "center", margin: 200 }}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          // Dispatch to dispatch or call an action in redux
          // sending data
          // dispatch(updateUserData(name))
          const todo = { id: Math.random(), name: name };
          dispatch(addTodoAction(todo));
          setName("");
        }}
      >
        Submit
      </button>
      <h1>{name}</h1>
      <h1>{userData?.userData?.name}</h1>
      <h1>{userData?.isOkFine}</h1>

      {todosData?.todos?.map((item, key) => {
        return (
          <div key={item?.id}>
            <h1>
              {key + 1} {item?.name}
            </h1>
            <div
              onClick={() => {
                dispatch(deleteTodoAction(item?.id));
              }}
            >
              Delete
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
