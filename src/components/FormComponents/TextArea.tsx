import { ErrorMessage, Field } from "formik";
import React from "react";
import ErrorText from "../ErrorText";
import { TextAreaProps } from "../FormikType";

function TextArea({ label, name, ...rest }: TextAreaProps) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" name={name} id={name} {...rest} />
      <ErrorMessage
        name={name}
        render={(error) => <ErrorText errorMsg={error} />}
      />
    </div>
  );
}

export default TextArea;
