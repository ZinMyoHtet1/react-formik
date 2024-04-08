import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const initialValues = {
  email: "",
  description: "",
  selectOption: "",
};

const selectOptions = [
  { key: "Select", value: "" },
  { key: "Option 1", value: "option1" },
  { key: "Option 2", value: "option2" },
];

const radioOptions = [
  { key: "R Option 1", value: "rOption1" },
  { key: "R Option 2", value: "rOption2" },
  { key: "R Option 3", value: "rOption3" },
];

const onSubmit = (values: any) => {
  console.log("Form Values", values);
};

const validationSchema = Yup.object({
  email: Yup.string().email().required("Required"),
  description: Yup.string().required("Required"),
  selectOption: Yup.string().required("Required"),
  radioOption: Yup.string().required("Required"),
});

function FormikContainer() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnChange={false}
    >
      {(formik: any) => {
        console.log(formik.values);
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              name="email"
              label="Email"
            />
            <FormikControl
              control="textarea"
              name="description"
              label="Description"
            />
            <FormikControl
              control="select"
              label="Select one option"
              name="selectOption"
              options={selectOptions}
            />
            <FormikControl
              control="radio"
              label="Radio Options"
              name="radioOption"
              options={radioOptions}
            />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormikContainer;
