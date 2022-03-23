import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (userName, userAge) => {
    console.log(
      "App.js: addUserHandler: ",
      "username: ",
      userName,
      " age: ",
      userAge
    );
    setUsersList((prevState) => {
      return [...prevState, { id: Math.random().toString(), name: userName, age: userAge }];
    });
  };

  return (
    <div className="app-container">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
