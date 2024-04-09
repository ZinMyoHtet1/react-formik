import React from "react";
import { RadioProps } from "../FormikType";
import { ErrorMessage, Field } from "formik";
import ErrorText from "../ErrorText";

function Radio({ label, name, options, ...rest }: RadioProps) {
  return (
    <div className="form-control radio-group">
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest}>
        {({ field }: { field: any }) => {
          return options.map((option) => (
            <div className="radio-item">
              <React.Fragment key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            </div>
          ));
        }}
      </Field>
      <ErrorMessage
        name={name}
        render={(error) => <ErrorText errorMsg={error} />}
      />
    </div>
  );
}

export default Radio;
