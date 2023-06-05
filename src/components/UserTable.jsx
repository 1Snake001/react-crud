import React from "react";
import { useNavigate } from "react-router-dom";

function UserTable({
  users,
  deletUserHandler,
  setUser,
  inputValues,
  setInputValues,
}) {
  const navigate = useNavigate();

  const naviGationHandler = () => {
    navigate("/new");
  };

  const updateHandler = (user) => {
    setUser(user);
    setInputValues({ name: user.name, email: user.email });
    navigate(`/${user.id}`);
  };

  return (
    <section className="container">
      <button onClick={naviGationHandler} className="btn btn-primary">
        Create New User
      </button>
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>email</th>
            <th>actions</th>
          </tr>
        </thead>
        {users && <tbody>
          {Object.values(users).map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button
                  onClick={() => updateHandler(user)}
                  className="btn btn-success btn-sm"
                >
                  Update
                </button>
                <button
                  onClick={() => deletUserHandler(user.id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>}
      </table>
    </section>
  );
}

export default UserTable;
