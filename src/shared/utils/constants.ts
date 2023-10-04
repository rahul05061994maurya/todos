import { InitialValueProps } from "../interfaces/add-todo.types";

export const initialValues: InitialValueProps = {
  todo: "",
  description: "",
  todoDueDate: "",
  todoStatus: "Not started",
};

export const todoStatusOptions = ["Not started", "In progress", "Completed"];
