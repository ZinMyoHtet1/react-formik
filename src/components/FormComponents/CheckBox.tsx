import React from "react";
import { RadioProps } from "../FormikType";
import { ErrorMessage, Field } from "formik";
import ErrorText from "../ErrorText";

function CheckBox({ label, name, options, ...rest }: RadioProps) {
  return (
    <div className="form-control">
      <Field name={name} {...rest}>
        {({ field }: { field: any }) => {
          return options.map((option) => {
            return (
              <div className="checkbox-item">
                <React.Fragment key={option.key}>
                  <input
                    type="checkbox"
                    {...field}
                    value={option.value}
                    id={option.value}
                    checked={field.value.includes(option.value)}
                  />
                  <label htmlFor={option.value}>{option.key}</label>
                </React.Fragment>
              </div>
            );
          });
        }}
      </Field>
      <ErrorMessage
        name={name}
        render={(error) => <ErrorText errorMsg={error} />}
      />
    </div>
  );
}

export default CheckBox;
