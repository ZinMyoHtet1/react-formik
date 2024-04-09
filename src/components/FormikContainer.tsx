import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
import validationSchema, { checkboxValidation } from "./validationSchema";
import { checkboxOptions, radioOptions, selectOptions } from "./formOptions";

const initialValues = {
  email: "",
  description: "",
  selectOption: "",
  radioOption: "",
  checkboxOption: [],
  birthday: null,
};

const onSubmit = (values: any, onSubmitProps: any) => {
  let i = 0;
  while (i < 1000000000) i++;
  onSubmitProps.setSubmitting(false);
  console.log("Form Values", values);
};

function FormikContainer() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      // validateOnChange={false}
      validateOnMount
    >
      {(formik: any) => {
        console.log(formik);
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
            <FormikControl
              control="checkbox"
              label="Checkbox Options"
              name="checkboxOption"
              options={checkboxOptions}
              validate={checkboxValidation}
            />
            <FormikControl
              control="datepicker"
              label="Select your birthday"
              name="birthday"
            />
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

export default FormikContainer;
