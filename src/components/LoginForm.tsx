import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const initialValues = {
  email: "",
  password: "",
};

const onSubmit = (values: any) => {
  console.log("Values", values);
};

const validationSchema = Yup.object({
  email: Yup.string().email("Not valid email").required("Email is Required"),
  password: Yup.string().required("Required"),
});

function LoginForm() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik: any) => {
        console.log("Formik Values", formik.value);
        return (
          <Form>
            <h2>Login</h2>
            <FormikControl
              control="input"
              label="Email"
              name="email"
              type="email"
            />
            <FormikControl
              control="input"
              label="Password"
              name="password"
              type="text"
            />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
