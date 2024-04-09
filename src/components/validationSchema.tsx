import * as Yup from "yup";
const validationSchema = Yup.object({
  email: Yup.string().email().required("Required"),
  description: Yup.string().required("Required"),
  selectOption: Yup.string().required("Required"),
  radioOption: Yup.string().required("Required"),
  // checkboxOption: Yup.array().required("Required"),
});

export const checkboxValidation = (checkboxOption: []) => {
  let error;
  if (checkboxOption.length === 0) error = "Required";
  return error;
};

export default validationSchema;
