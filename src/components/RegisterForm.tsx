import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const mocOptions = [
  { key: "Email", value: "emailmoc" },
  { key: "Telephone", value: "telephonemoc" },
];

const initialValues = {
  email: "",
  passward: "",
  confirmPassword: "",
  modeOfContact: "",
  phone: "",
};

const onSubmit = (values: any) => {
  console.log(values);
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Not valid type").required("Email is Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Password must match")
    .required("Required"),
  modeOfContact: Yup.string().required("Required"),
  phone: Yup.string().when("modeOfContact", {
    is: (modeOfContact: string): boolean => modeOfContact === "telephonemoc",
    then: (): Yup.StringSchema<string> => Yup.string().required("Required"),
  }),
});

function RegisterForm() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik: any) => {
        console.log("Formik values", formik.values);
        return (
          <Form>
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
            <FormikControl
              control="input"
              label="Confirm Password"
              name="confirmPassword"
              type="text"
            />
            <FormikControl
              control="radio"
              label="Mode of Contact"
              name="modeOfContact"
              options={mocOptions}
            />

            <FormikControl
              control="input"
              label="Phone"
              name="phone"
              type="text"
            />

            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default RegisterForm;
