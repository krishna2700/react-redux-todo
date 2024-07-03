import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "./Redux/Actions/UserActions";

function App() {
  const [name, setName] = useState();
  const dispatch = useDispatch();

  // Getting the global data.
  const userData = useSelector((state) => state.userReducer);
  console.log(userData, "userData");
  return (
    <div style={{ textAlign: "center", margin: 200 }}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() =>
          // Dispatch to dispatch or call an action in redux
          // sending data
          dispatch(updateUserData(name))
        }
      >
        Submit
      </button>
      <h1>{name}</h1>
      <h1>{userData?.userData?.name}</h1>
      <h1>{userData?.isOkFine}</h1>
    </div>
  );
}

export default App;
