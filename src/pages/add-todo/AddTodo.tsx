import { Formik, Form } from "formik";
import InputField from "../../shared/components/InputField";
import Buttons from "../../shared/components/Buttons";
import { validationSchema } from "../../shared/utils/validationSchema";
import { initialValues, todoStatusOptions } from "../../shared/utils/constants";
import { InitialValueProps } from "../../shared/interfaces/add-todo.types";
import "./AddToDo.css";
import Container from "@mui/material/Container";
import Dropdown from "../../shared/components/Dropdown";

// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const AddTodo = () => {
  const formSubmitHandler = (values: InitialValueProps) => {
    console.log("values", values);
  };

  return (
    <div className="container">
      <Container maxWidth="sm">
        <Formik
          initialValues={initialValues}
          onSubmit={formSubmitHandler}
          validationSchema={validationSchema}
        >
          <Form className="form">
            <InputField name="todo" type="text" id="todo" label="Todo" />
            <InputField
              label="Description"
              name="description"
              type="text"
              id="description"
              multiline
              rows={5}
            />
            <Dropdown
              name="todoStatus"
              id="todoStatus"
              label="ToDo Status"
              options={todoStatusOptions}
            />
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
          </LocalizationProvider> */}
            <Buttons type="submit" label="Submit" name="submit" />
            {/* <button>Submit</button> */}
          </Form>
          {/* <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="todo">Todo</label>
          <Inputs id="todo" name="todo" type="email" />

          {formik.touched.todo && formik.errors.todo && (
            <div>{formik.errors.todo}</div>
          )}
        </div>

        <div>
          <label htmlFor="email">Detailed description</label>
          <textarea
            id="description"
            name="description"
            rows={5}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description && (
            <div>{formik.errors.description}</div>
          )}
        </div>
        <div>
          <label htmlFor="todoDueDate">Todo Due Date</label>
          <input
            id="todoDueDate"
            name="todoDueDate"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.todoDueDate}
          />
        </div>
        <div>
          <label htmlFor="todoStatus">Todo Status</label>
          <select
            id="todoStatus"
            name="todoStatus"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.todoStatus}
          >
            <option value="Not started">Not started</option>
            <option value="In progress">In progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form> */}
        </Formik>
      </Container>
    </div>
  );
};

export default AddTodo;
