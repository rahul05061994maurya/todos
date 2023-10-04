import * as Yup from "yup";
export const validationSchema = Yup.object({
  todo: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});
