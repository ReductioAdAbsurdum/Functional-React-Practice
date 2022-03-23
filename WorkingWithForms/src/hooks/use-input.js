import { useReducer } from "react";

const defaultInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  }
  if (action.type === "BLUR") {
    return {
      value: state.value,
      isTouched: true,
    };
  }
  if (action.type === "RESET") {
    return defaultInputState;
  }

  return defaultInputState;
};

const useInput = (valueValidator) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    defaultInputState
  );

  const isValueValid = valueValidator(inputState.value);
  const hasError = !isValueValid && inputState.isTouched;

  const changeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const blurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValueValid: isValueValid,
    isTouched: inputState.isTouched,
    hasError: hasError,
    onChange: changeHandler,
    onBlur: blurHandler,
    reset: reset,
  };
};

export default useInput;
