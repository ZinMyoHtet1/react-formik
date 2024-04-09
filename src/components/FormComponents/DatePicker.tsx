import "react-datepicker/dist/react-datepicker.css";
import DateView from "react-datepicker";
import { ErrorMessage, Field } from "formik";
import ErrorText from "../ErrorText";
import { DatePickerProps } from "../FormikType";

function DatePicker({ label, name, ...rest }: DatePickerProps) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }: any) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage
        name={name}
        render={(error) => <ErrorText errorMsg={error} />}
      />
    </div>
  );
}

export default DatePicker;
