import React, { useState, Fragment, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import "./AddUser.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const cardRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    console.log(nameInputRef);
    console.log(cardRef);

    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (
      enteredUsername.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      +enteredAge < 0
    ) {
      setError({
        title: "invalid input",
        message: "Please enter valid information",
      });

      return;
    }
  
    props.onAddUser(enteredUsername, enteredAge);

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className="input" >
        <form onSubmit={(event) => addUserHandler(event)}>
          <label htmlFor="username">Username</label>
          <input id="username" typeof="text" ref={nameInputRef} />

          <label htmlFor="age">Age</label>
          <input id="age" typeof="number" ref={ageInputRef} />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
