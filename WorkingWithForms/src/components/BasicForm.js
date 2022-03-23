import useInput from "../hooks/use-input";
import TextControl from "./TextControl";

const nameValidator = (text) => text.trim().length > 0;
const emailValidator = (text) =>
  text.trim().length > 5 &&
  text.includes("@") &&
  text.includes(".") &&
  text.charAt(text.length - 1) !== ".";

const BasicForm = (props) => {
  const firstNameInput = useInput(nameValidator);
  const lastNameInput = useInput(nameValidator);
  const emailInput = useInput(emailValidator);

  const isFormValid =
    firstNameInput.isValueValid &&
    lastNameInput.isValueValid &&
    emailInput.isValueValid;

  const clear = () => {
    firstNameInput.reset();
    lastNameInput.reset();
    emailInput.reset();
  };

  const alert = () => {
    firstNameInput.onBlur();
    lastNameInput.onBlur();
    emailInput.onBlur();
  };

  const onSubmit = (event) => {
    event.preventDefault();
    alert();

    if (isFormValid) {
      console.log(
        `Submited ${firstNameInput.value} ${lastNameInput.value} ${emailInput.value}`
      );
      clear();
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="control-group">
        <TextControl
          labelText="First Name"
          onChange={firstNameInput.onChange}
          onBlur={firstNameInput.onBlur}
          value={firstNameInput.value}
          error={firstNameInput.hasError}
          errorText={"Please enter valid first name"}
        />
        <TextControl
          labelText="Last Name"
          onChange={lastNameInput.onChange}
          onBlur={lastNameInput.onBlur}
          value={lastNameInput.value}
          error={lastNameInput.hasError}
          errorText={"Please enter valid last name"}
        />
        <TextControl
          labelText="Email"
          onChange={emailInput.onChange}
          onBlur={emailInput.onBlur}
          value={emailInput.value}
          error={emailInput.hasError}
          errorText={"Please enter valid email"}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
