import { TextField } from "@mui/material";

const TextControl = (props) => {
  return (
    <div className="textControl">
      <TextField
        helperText={props.error ? props.errorText : ""}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        error={props.error}
        label={props.labelText}
      />
    </div>
  );
};

export default TextControl;
