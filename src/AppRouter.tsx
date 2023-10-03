import { Suspense, lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";

const AddList = lazy(() => import("./pages/add-todo/AddTodo"));
const TodoList = lazy(() => import("./pages/todo-list/TodoList"));

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="todo-list" replace />,
  },
  {
    path: "/todo-list",
    element: (
      <Suspense>
        <TodoList />
      </Suspense>
    ),
  },
  {
    path: "/add-todo",
    element: (
      <Suspense>
        <AddList />
      </Suspense>
    ),
  },
]);

export default AppRouter;
