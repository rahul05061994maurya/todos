import { useField } from "formik";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const Dropdown = ({ label, options, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Select
        labelId="demo-simple-select-helper-label"
        label={label}
        {...field}
        {...props}
      >
        {options.map((option: string) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default Dropdown;
