import "./App.css";
import { useState } from "react";
import User from "./assets/components/User";
import UserContext from "./assets/context/UserContex";
const App = () => {
  const [user, setUser] = useState("aiza");
  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <h1>react-content-API</h1>
        <User />
      </div>
    </UserContext.Provider>
  );
};

export default App;
