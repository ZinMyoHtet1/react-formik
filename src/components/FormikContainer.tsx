import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const initialValues = {};

const onSubmit = (values: any) => {};

const validationSchema = Yup.object({});

function FormikContainer() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik: any) => {
        return <Form></Form>;
      }}
    </Formik>
  );
}

export default FormikContainer;
