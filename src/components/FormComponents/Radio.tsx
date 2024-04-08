import React from "react";
import { RadioProps } from "../FormikType";
import { Field } from "formik";

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
    </div>
  );
}

export default Radio;
