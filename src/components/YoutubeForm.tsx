import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import * as yup from "yup";
import ErrorText from "./ErrorText";
import { useSelector } from "react-redux";
// import { formSubmit } from "./redux";
import { useEffect, useState } from "react";
// import { Dispatch } from "redux";

type ValueType = {
  name: string;
  email: string;
  channel: string;
  comments: string;
  address: string;
  social: { facebook: string; instagram: string };
  phNumber: string[];
};

const initialValues = {
  name: "Zin Myo",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    instagram: "",
  },
  phNumber: [""],
};

const savedValues = {
  name: "Zin Myo",
  email: "zin@gmail.com",
  channel: "Travel Around",
  comments: "Nice",
  address: "11b Baset Street",
  social: {
    facebook: "",
    instagram: "",
  },
  phNumber: [""],
};

const validationSchema = yup.object({
  name: yup.string().required("Required!"),
  email: yup.string().email("Not Valid Email Format").required("Required"),
  channel: yup.string().required("Required"),
  social: yup.object({
    facebook: yup.string().required("Required"),
    instagram: yup.string().required("Required"),
  }),
});

const validateComments = (values: any) => {
  let errors: any = {};
  if (!values.comments) {
    errors.comments = "Required";
  }
  return errors;
};

function YoutubeForm() {
  const [formedValues, setFormedValues] = useState<ValueType | null>(null);
  const userData = useSelector((state: any) => state);
  const onSubmit = (values: any, onSubmitProps: any) => {
    // dispatch(formSubmit(values));
    console.log("Form SUbmit", values);
    console.log("Sumbmit Props", onSubmitProps);
    // setIsSubmitting(fal);
    let x = 0;
    while (x < 200000000) x++;
    onSubmitProps.setSubmitting(false);
    // setIsSubmitting(false);
    onSubmitProps.resetForm();
    setFormedValues(null);
  };
  console.log(userData);
  const validateAddress = (value: any) => {
    let error;
    if (!value) error = "Required";
    return error;
  };
  return (
    <Formik
      initialValues={formedValues || initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validate={validateComments}
      // validateOnChange={false}
      // validateOnBlur={false}
      // validateOnMount
      enableReinitialize
    >
      {(formik: any) => {
        console.log(formik);
        console.log("Submitting", formik.isSubmitting);
        return (
          <Form>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" />
            </div>

            <div className="form-control">
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" />
            </div>

            <div className="form-control">
              <label htmlFor="channel">Channel</label>
              <Field type="text" id="channel" name="channel" />
              <ErrorMessage name="channel" />
            </div>

            <div className="form-control">
              <label htmlFor="comments">Comments</label>
              <FastField type="text" id="comments" name="comments">
                {(props: any) => {
                  const { field, form, meta } = props;
                  console.log("Field render");
                  return (
                    <>
                      <input type="text" id="comments" {...field} />
                      {meta.touched && meta.error ? (
                        <div className="error">{meta.error}</div>
                      ) : null}
                    </>
                  );
                }}
              </FastField>
            </div>
            <div className="form-control">
              <label htmlFor="address">Address</label>
              <Field
                type="text"
                id="address"
                name="address"
                // render={(fieldProps: any) => {
                //   console.log("Field render");
                // }}
                validate={validateAddress}
              />
              <ErrorMessage
                name="address"
                render={(error) => <ErrorText errorMsg={error} />}
              />
            </div>
            <div className="form-control">
              <label htmlFor="facebook">Facebook</label>
              <Field type="text" id="facebook" name="social.facebook" />
              <ErrorMessage
                name="social.facebook"
                render={(error) => <ErrorText errorMsg={error} />}
              />
            </div>
            <div className="form-control">
              <label htmlFor="instagram">Instagram</label>
              <Field type="text" id="instagram" name="social.instagram" />
              <ErrorMessage
                name="social.instagram"
                render={(error) => <ErrorText errorMsg={error} />}
              />
            </div>
            <div className="form-control">
              <label htmlFor="phNumber">List of phone</label>
              <FieldArray name="phNumber">
                {(fieldProps: any) => {
                  console.log(fieldProps);
                  const { push, remove, form } = fieldProps;
                  const { values } = form;
                  const { phNumber } = values;
                  console.log("submitting 1", formik.isSubmitting);
                  return (
                    <>
                      {phNumber.map((value: any, index: number) => (
                        <div key={index}>
                          <Field type="text" name={`phNumber[${index}]`} />
                          {index > 0 ? (
                            <button onClick={() => remove(index)}>-</button>
                          ) : null}
                          <button onClick={() => push(index)}>+</button>
                        </div>
                      ))}
                    </>
                  );
                }}
              </FieldArray>
            </div>
            {/* <button
              type="button"
              onClick={() => {
                formik.setFieldTouched("email");
                formik.validateField("email");
              }}
            >
              Check Comments
            </button>
            <button type="button" onClick={() => formik.validateForm()}>
              Check All Fields
            </button> */}
            {formik.isSubmitting ? (
              <ErrorText errorMsg="Submitting..." />
            ) : null}
            <button type="button" onClick={() => setFormedValues(savedValues)}>
              Load Saved Form
            </button>
            <button type="reset" onClick={() => setFormedValues(null)}>
              Reset
            </button>
            <button
              type="submit"
              disabled={formik.isSubmitting || !formik.isValid}
            >
              {formik.isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default YoutubeForm;
