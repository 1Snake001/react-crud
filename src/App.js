import { useState } from "react";
import "./App.scss";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [data, setData] = useState([]);
 
  
  const handleFormSubmit = (formData) => {
    const id = Date.now().toString();
    const newRecord = { ...formData, id };
    setData([...data, newRecord]);
  };

  const handleRecordDelete = (id) => {
    const updatedData = data.filter((record) => record.id !== id);
    setData(updatedData);
  };
  return (
    <div className="App">
      <div>
        <h1>CRUD App</h1>
        <Form onSubmit={handleFormSubmit} />
        <Table data={data} onDelete={handleRecordDelete} />
      </div>
    </div>
  );
}

export default App;
