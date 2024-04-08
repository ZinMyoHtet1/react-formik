import React from "react";
import { SelectProps } from "../FormikType";
import { ErrorMessage, Field } from "formik";
import ErrorText from "../ErrorText";

function Select({ label, name, options, ...rest }: SelectProps) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="select" name={name} id={name} {...rest}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      <ErrorMessage
        name={name}
        render={(error) => <ErrorText errorMsg={error} />}
      />
    </div>
  );
}

export default Select;
