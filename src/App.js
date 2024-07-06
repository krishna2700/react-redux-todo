import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPhotoAction } from "./Redux/Actions/PhotoAction";
import { addTodoAction, deleteTodoAction } from "./Redux/Actions/TodoActions";

function App() {
  const [name, setName] = useState();
  const [photos, setphotos] = useState([]);
  const dispatch = useDispatch();

  // Getting the global data.
  const userData = useSelector((state) => state.userReducer);
  const todosData = useSelector((state) => state.TodoReducers);
  const photosAction = useSelector((state) => state.PhotoReducer);

  const getDataFromApi = async () => {
    const res = await axios.get(
      "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=2"
    );
    console.log(res.data);
    setphotos(res.data.photos);
    dispatch(addPhotoAction(res.data.photos));
  };

  useEffect(() => {
    getDataFromApi();
  }, []);

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
      <h1>Local Data</h1>
      {photos?.map((item, key) => {
        return (
          <div key={item?.id}>
            <h3>
              {key + 1} {item?.description}
            </h3>
            <div>
              <img src={item?.url} style={{ width: 100, height: 100 }} />
            </div>
            <div
              style={{ cursor: "pointer", color: "red" }}
              onClick={() => {
                dispatch(deleteTodoAction(item?.id));
              }}
            >
              Delete
            </div>
          </div>
        );
      })}
      <h1>Global Data</h1>
      {photosAction?.photos?.map((item, key) => {
        return (
          <div key={item?.id}>
            <h3>
              {key + 1} {item?.description}
            </h3>
            <div>
              <img src={item?.url} style={{ width: 100, height: 100 }} />
            </div>
            <div
              style={{ cursor: "pointer", color: "red" }}
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
