import "./style/App.scss";
import services from "./services/services";
import { useEffect, useState } from "react";

function App() {
   const [users, setUsers] = useState([]);

  let response = services.getData();
  useEffect(()=> {
    response.then((usersData) => {
      setUsers(usersData)
    });
  },[])

  return <div className="App"></div>;
}

export default App;
