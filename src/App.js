import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
      <button onClick={() => console.log(name)}>Submit</button>
      <h1>{name}</h1>
      <h1>{userData?.userData?.name}</h1>
      <h1>{userData?.isOkFine}</h1>
    </div>
  );
}

export default App;
