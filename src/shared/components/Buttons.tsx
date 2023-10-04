import Button from "@mui/material/Button";
import { useField } from "formik";

const Buttons = ({ label, disabled, ...props }: any) => {
  const [field] = useField(props);

  return (
    <Button variant="contained" disabled={disabled} {...field} {...props}>
      {label}
    </Button>
  );
};

export default Buttons;
