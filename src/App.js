import "./style/App.scss";
import services from "./services/services";
import { useEffect, useState } from "react";
import UserTable from "./components/UserTable";
import NewUserForm from "./components/NewUserForm";
import UpdateForm from "./components/UpdateForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
  });
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  async function getUserData() {
    let response = services.getData();
    response.then((usersData) => {
      setUsers(usersData);
    });
  }

  useEffect(() => {
    getUserData();
  }, []);

  const deletUserHandler = async (id) => {
    await services.deleteData(id);
    getUserData();
  };


  return (
    <main className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <UserTable
                users={users}
                deletUserHandler={deletUserHandler}
                setUser={setUser}
                inputValues={inputValues}
                setInputValues={setInputValues}
              />
            }
          />
          <Route
            path="/new"
            element={
              <NewUserForm
                getUserData={getUserData}
                inputValues={inputValues}
                setInputValues={setInputValues}
              />
            }
          />
          <Route
            path={`/${user.id}`}
            element={
              <UpdateForm
                user={user}
                setUser={setUser}
                getUserData={getUserData}
                inputValues={inputValues}
                setInputValues={setInputValues}
              />
            }
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
