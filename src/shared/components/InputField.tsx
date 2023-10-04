import { useField } from "formik";
import TextField from "@mui/material/TextField";

const InputField = ({ label, multiline = false, rows = 1, ...props }: any) => {
  const [field, meta] = useField(props);

  return (
    <TextField
      variant="outlined"
      label={label}
      error={!!meta.touched && !!meta.error}
      helperText={meta.touched && meta.error}
      multiline={multiline}
      rows={rows}
      {...field}
      {...props}
    />
  );
};

export default InputField;
