import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const initialValues = {
  name: "",
  bio: "",
  course: "",
  skills: [],
  date: null,
};

const onSubmit = (values: any) => {
  console.log(values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  bio: Yup.string().required("Required"),
  course: Yup.string().required("Required"),
  skills: Yup.array().required("Required"),
  date: Yup.date().required("Required").nullable(),
});

const courseOptions = [
  { key: "Select", value: "" },
  { key: "React", value: "React" },
  { key: "Vue", value: "Vue" },
  { key: "jQuery", value: "jQuery" },
];

const skillOptions = [
  { key: "HTML", value: "HTML" },
  { key: "CSS", value: "CSS" },
  { key: "Javascript", value: "Javascript" },
];

function CourseEnrollment() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik: any) => {
        console.log("Formik Values", formik.values);
        return (
          <Form>
            <FormikControl
              control="input"
              label="Name"
              name="name"
              type="text"
            />
            <FormikControl control="textarea" label="Bio" name="bio" />
            <FormikControl
              control="select"
              label="Course"
              name="course"
              options={courseOptions}
            />
            <FormikControl
              control="checkbox"
              label="Skills"
              name="skills"
              options={skillOptions}
            />
            <FormikControl control="datepicker" label="Date" name="date" />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default CourseEnrollment;
